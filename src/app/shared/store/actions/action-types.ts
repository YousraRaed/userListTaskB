import * as AuthActions from './auth.actions';
import * as UserActions from './users.actions';

export { UserActions, AuthActions };

const actionTypes = { ...UserActions, ...AuthActions };

export const allActionTypes = Object.values(actionTypes);
