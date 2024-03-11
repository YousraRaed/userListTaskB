import { createAction } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadCreateUser = createAction(
  '[Create User] Load User',
  (user: Partial<User>) => ({
    user,
  })
);

export const createUserLoaded = createAction(
  '[Create User] Users Loaded',
  (user: Partial<User>) => ({
    user,
  })
);

export const loadUpdateUser = createAction(
  '[Update User] Load User',
  (user: Partial<User>) => ({
    user,
  })
);

export const updateUserLoaded = createAction(
  '[Update User] Users Loaded',
  (user: Partial<User>) => ({
    user,
  })
);

export const loadDeleteUser = createAction(
  '[Delete User] Load User',
  (userId: number) => ({
    userId,
  })
);

export const deleteUserLoaded = createAction(
  '[Delete User] Users Loaded',
  (userId: number) => ({
    userId,
  })
);

export const loadGetUsers = createAction('[Get Users] Load User');

export const getUserLoaded = createAction(
  '[Get Users] Users Loaded',
  (users: Partial<User>[]) => ({
    users,
  })
);
