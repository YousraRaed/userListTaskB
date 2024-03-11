import { ActionReducerMap, MetaReducer } from '@ngrx/store';
// import { environment } from '../../../../environments/environment';

import { userFeatureKey, UserState, userReducer } from './user.reducer';

export interface AppState {
  // [pendingFeatureKey]: PendingState;
  [userFeatureKey]: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  // [pendingFeatureKey]: pendingReducer,
  [userFeatureKey]: userReducer,
};

// export const metaReducers: MetaReducer<AppState>[] = !environment.production
//   ? []
//   : [];
