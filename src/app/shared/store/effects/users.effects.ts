import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import {
  UserClientService,
  USER_CLIENT_SERVICE,
} from '../../outbound/user.client.service';
import { NotificationService } from '../../services/notification.service';
import { UserActions } from '../actions/action-types';
import {
  createUserLoaded,
  deleteUserLoaded,
  getUserLoaded,
  updateUserLoaded,
} from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadGetUsers),
      switchMap((action) => {
        return this.userService.getUsers();
      }),
      map((users) => {
        this.notificationService.showPopUp(
          'translation:notification.sucessGetUsers'
        );
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
      map((user) => {
        this.notificationService.showPopUp(
          'translation:notification.sucessAddUser'
        );

        return createUserLoaded(user);
      })
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUpdateUser),
      switchMap((action) => {
        return this.userService.updateUser(action.user);
      }),
      map((user) => {
        this.notificationService.showPopUp(
          'translation:notification.sucessUpdateUser'
        );

        return updateUserLoaded(user);
      })
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadDeleteUser),
      switchMap((action) => {
        return this.userService.deleteUser(action.userId);
      }),
      map((userId) => {
        this.notificationService.showPopUp(
          'translation:notification.sucessDeleteUser'
        );

        return deleteUserLoaded(userId);
      })
    )
  );

  constructor(
    private actions$: Actions,
    @Inject(USER_CLIENT_SERVICE)
    private userService: UserClientService,
    private notificationService: NotificationService
  ) {}
}
