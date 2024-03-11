import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserActions } from '../actions/action-types';

export const userFeatureKey = 'users';

export interface UserState {
  users: Partial<User>[];
}
export const initialState: UserState = {
  users: [],
};
export const userReducer = createReducer(
  initialState,
  on(UserActions.getUserLoaded, (state, action) => {
    return {
      ...state,
      users: action.users || [],
    };
  }),

  on(UserActions.createUserLoaded, (state, action) => {
    let users: Partial<User>[] = [];
    users = [...state.users];
    users.push(action.user);
    return {
      ...state,
      users: users,
    };
  }),
  on(UserActions.deleteUserLoaded, (state, action) => {
    let users: Partial<User>[] = [];
    users = [...state.users];
    users = users.filter((obj) => obj.id !== action.userId);

    return {
      ...state,
      users: users,
    };
  }),
  on(UserActions.updateUserLoaded, (state, action) => {
    let users: Partial<User>[] = [];
    users = [...state.users];
    const userIndex = users.findIndex((user) => user.id === action.user.id);
    if (userIndex !== -1) {
      users[userIndex] = action.user;
    }

    return {
      ...state,
      users: users,
    };
  })
);
