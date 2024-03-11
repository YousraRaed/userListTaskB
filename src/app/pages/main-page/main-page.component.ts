import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersListComponent } from '../../components/users/users-list/users-list.component';
import { AppState } from '../../shared/store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { AddUserDialogComponent } from '../../components/users/add-user-dialog/add-user-dialog.component';
import { I18NextModule } from 'angular-i18next';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { signOut } from '../../shared/store/actions/auth.actions';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [UsersListComponent, I18NextModule, MatInputModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  filterValue?: string;
  constructor(
    public store: Store<AppState>,
    private dialog: MatDialog,
    private router: Router
  ) {}
  openAddUserDialog(): void {
    this.dialog.open(AddUserDialogComponent, {
      panelClass: 'dialog',
    });
  }
  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
  }
  onClickLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
    this.store.dispatch(signOut());
  }
}
