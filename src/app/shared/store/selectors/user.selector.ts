import { AppState } from '../reducers/app.reducer';
import { createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const selectUserState = (state: AppState) => state.users;
export const selectUsers = createSelector(
  selectUserState,
  (userState: UserState) => {
    return userState.users;
  }
);
