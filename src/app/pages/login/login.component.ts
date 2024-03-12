import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18NextModule } from 'angular-i18next';
import { AppState } from '../../shared/store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { signIn } from '../../shared/store/actions/auth.actions';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    I18NextModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public store: Store<AppState>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, this.strongPasswordValidator()]],
    });
  }
  ngOnInit() {}
  onSubmit() {
    if (this.loginForm?.valid) {
      this.store.dispatch(signIn(this.loginForm.value));
      this.router.navigate(['users']);
    }
  }
  get username(): AbstractControl {
    return this.loginForm.get('username') as AbstractControl;
  }
  get password(): AbstractControl {
    return this.loginForm.get('password') as AbstractControl;
  }

  strongPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const hasSpecial = /[\^$*.[\]{}()?"!@#%&/,><':;|_~`]/.test(value);
      const isValid =
        hasUpperCase &&
        hasLowerCase &&
        hasNumeric &&
        hasSpecial &&
        value.length >= 8;

      return !isValid ? { strongPassword: true } : null;
    };
  }
}
