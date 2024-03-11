import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import {
  AuthClientService,
  AUTH_SERVICE,
} from '../../outbound/auth.client.service';

import { AuthActions } from '../actions/action-types';
import { signedIn, signedOut } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      switchMap((action) => {
        const username = action.payload.username as string;
        const password = action.payload.password as string;
        return this.authService.signIn(username, password);
      }),
      map((user) => {
        return signedIn(user);
      })
    )
  );
  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      switchMap((action) => {
        return this.authService.signOut();
      }),
      map((isLogout) => {
        return signedOut(isLogout);
      })
    )
  );
  constructor(
    private actions$: Actions,
    @Inject(AUTH_SERVICE)
    private authService: AuthClientService
  ) {}
}
