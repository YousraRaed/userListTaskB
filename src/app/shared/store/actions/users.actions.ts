import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';
import { PrefixEnum, UsersActionNamesEnum } from './action-names.enum';

export const loadCreateUser = createAction(
  '[Create User] Load User',
  (
    user: Partial<User>,
    pending: string = `${PrefixEnum.BEGIN}_${UsersActionNamesEnum.ADD_USER}`
  ) => ({
    pending,
    user,
  })
);

export const createUserLoaded = createAction(
  '[Create User] Users Loaded',
  (
    user: Partial<User>,
    pending: string = `${PrefixEnum.END}_${UsersActionNamesEnum.ADD_USER}`
  ) => ({
    user,
    pending,
  })
);

export const loadUpdateUser = createAction(
  '[Update User] Load User',
  (
    user: Partial<User>,
    pending: string = `${PrefixEnum.BEGIN}_${UsersActionNamesEnum.UPDATE_USER}`
  ) => ({
    pending,
    user,
  })
);

export const updateUserLoaded = createAction(
  '[Update User] Users Loaded',
  (
    user: Partial<User>,
    pending: string = `${PrefixEnum.END}_${UsersActionNamesEnum.UPDATE_USER}`
  ) => ({
    user,
    pending,
  })
);

export const loadDeleteUser = createAction(
  '[Delete User] Load User',
  (
    userId: number,
    pending: string = `${PrefixEnum.BEGIN}_${UsersActionNamesEnum.DELETE_USER}`
  ) => ({
    pending,
    userId,
  })
);

export const deleteUserLoaded = createAction(
  '[Delete User] Users Loaded',
  (
    userId: number,
    pending: string = `${PrefixEnum.END}_${UsersActionNamesEnum.DELETE_USER}`
  ) => ({
    userId,
    pending,
  })
);

export const loadGetUsers = createAction(
  '[Get Users] Load User',
  (
    pending: string = `${PrefixEnum.BEGIN}_${UsersActionNamesEnum.LOAD_USERS}`
  ) => ({
    pending,
  })
);

export const getUserLoaded = createAction(
  '[Get Users] Users Loaded',
  (
    users: Partial<User>[],
    pending: string = `${PrefixEnum.END}_${UsersActionNamesEnum.LOAD_USERS}`
  ) => ({
    users,
    pending,
  })
);
