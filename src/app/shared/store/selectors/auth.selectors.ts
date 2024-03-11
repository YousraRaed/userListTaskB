import { createSelector } from '@ngrx/store';
import { RoleEnum } from '../../models/role.enum';
import { AppState } from '../reducers/app.reducer';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthState = (state: AppState) => state.auth;

export const isUserLoggedIn = createSelector(
  selectAuthState,
  (auth: AuthState) => {
    return !!auth.authUser;
  }
);
export const authUser = createSelector(selectAuthState, (auth: AuthState) => {
  return auth.authUser;
});
export const isAuthAdmin = createSelector(
  selectAuthState,
  (auth: AuthState) => {
    return auth.authUser?.role === RoleEnum.ADMIN;
  }
);
