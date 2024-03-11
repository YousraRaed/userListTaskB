import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authFeatureKey, authReducer, AuthState } from './auth.reducer';

import { userFeatureKey, UserState, userReducer } from './user.reducer';

export interface AppState {
  [authFeatureKey]: AuthState;
  [userFeatureKey]: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  [authFeatureKey]: authReducer,
  [userFeatureKey]: userReducer,
};
