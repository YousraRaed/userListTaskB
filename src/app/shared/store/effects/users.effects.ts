import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import {
  UserClientService,
  USER_CLIENT_SERVICE,
} from '../../outbound/user.client.service';
import { UserService } from '../../services/user.service';
import { UserActions } from '../actions/action-types';
import {
  createUserLoaded,
  deleteUserLoaded,
  getUserLoaded,
  updateUserLoaded,
} from '../actions/users.actions';
import { AppState } from '../reducers/app.reducer';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadGetUsers),
      switchMap((action) => {
        return this.userService.getUsers();
      }),
      map((users) => {
        return getUserLoaded(users);
      })
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadCreateUser),
      switchMap((action) => {
        return this.userService.createUser(action.user);
      }),
      map((user) => createUserLoaded(user))
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUpdateUser),
      switchMap((action) => {
        return this.userService.updateUser(action.user);
      }),
      map((user) => updateUserLoaded(user))
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadDeleteUser),
      switchMap((action) => {
        return this.userService.deleteUser(action.userId);
      }),
      map((userId) => deleteUserLoaded(userId))
    )
  );

  constructor(
    private actions$: Actions,
    @Inject(USER_CLIENT_SERVICE)
    private userService: UserClientService,
    private store: Store<AppState>
  ) {}
}
