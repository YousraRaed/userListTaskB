import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppState } from '../../../shared/store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import {
  loadCreateUser,
  loadUpdateUser,
} from '../../../shared/store/actions/users.actions';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../../shared/models/user.model';
import { MatSelectModule } from '@angular/material/select';
import {
  I18NEXT_SERVICE,
  ITranslationService,
  I18NextModule,
} from 'angular-i18next';
@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    I18NextModule,
  ],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss',
})
export class AddUserDialogComponent {
  addUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<any>
  ) {
    this.addUserForm = this.formBuilder.group({
      name: [data?.user?.name || '', Validators.required],
      email: [data?.user?.email || '', [Validators.required, Validators.email]],
      phone: [data?.user?.phone || '', Validators.required],
      status: [
        data?.user && data.user.status ? data.user.status : 'active',
        Validators.required,
      ],
    });
  }
  onSubmit(): void {
    if (this.addUserForm.valid) {
      let user: Partial<User> = {
        id: this.data?.user.id ? this.data?.user.id : Math.random(),
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        status: this.status.value,
      };
      if (this.data?.user) {
        this.store.dispatch(loadUpdateUser(user));
      } else {
        this.store.dispatch(loadCreateUser(user));
      }
      this.dialogRef.close(this.addUserForm.value);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  get name(): AbstractControl {
    return this.addUserForm.get('name') as AbstractControl;
  }
  get email(): AbstractControl {
    return this.addUserForm.get('email') as AbstractControl;
  }
  get phone(): AbstractControl {
    return this.addUserForm.get('phone') as AbstractControl;
  }
  get status(): AbstractControl {
    return this.addUserForm.get('status') as AbstractControl;
  }
}
