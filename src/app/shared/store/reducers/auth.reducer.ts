import { createReducer, on } from '@ngrx/store';
import { Auth } from '../../models/auth.model';
import { AuthActions } from '../actions/action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  authUser: Partial<Auth> | null;
}

export const initialState: AuthState = {
  authUser: null,
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.signedIn, (state, action) => {
    if (action.payload.username)
      localStorage.setItem('username', action.payload.username);
    if (action.payload.role) localStorage.setItem('role', action.payload.role);
    return {
      ...state,
      authUser: action.payload,
    };
  }),

  on(AuthActions.signedOut, (state) => ({
    ...initialState,
  }))
);
