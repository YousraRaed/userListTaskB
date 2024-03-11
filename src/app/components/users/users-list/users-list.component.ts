import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { AppState } from '../../../shared/store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { selectUsers } from '../../../shared/store/selectors/user.selector';
import {
  loadDeleteUser,
  loadGetUsers,
} from '../../../shared/store/actions/users.actions';
import { Observable, Subscription } from 'rxjs';
import {
  I18NEXT_SERVICE,
  ITranslationService,
  I18NextModule,
} from 'angular-i18next';
import { isAuthAdmin } from '../../../shared/store/selectors/auth.selectors';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatSortModule,
    MatIconModule,
    I18NextModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit, OnChanges {
  @Input() filterValue?: string;
  displayedColumnsForUser: string[] = ['name', 'email', 'phone', 'status'];
  displayedColumnsForAdmin: string[] = [
    'name',
    'email',
    'phone',
    'status',
    'actions',
  ];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  isRoleAdmin$: Observable<boolean> | undefined;

  userSubscription?: Subscription;

  constructor(
    public store: Store<AppState>,
    private dialog: MatDialog,
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.filterValue) this.dataSource.filter = this.filterValue;
  }

  ngOnInit(): void {
    this.loadUsers();
    this.isRoleAdmin$ = this.store.select(isAuthAdmin);
  }
  ngAfterViewInit() {
    if (this.sort) this.dataSource.sort = this.sort;
    if (this.paginator) this.dataSource.paginator = this.paginator;
  }

  loadUsers() {
    this.store.dispatch(loadGetUsers());
    this.userSubscription = this.store
      .select(selectUsers)
      .subscribe((users: Partial<User>[]) => {
        this.dataSource.data = users;
      });
  }

  deleteUser(user: User) {
    this.store.dispatch(loadDeleteUser(user.id));
  }
  editUser(user: User) {
    this.dialog.open(AddUserDialogComponent, {
      panelClass: 'dialog',
      data: {
        user,
      },
    });
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
