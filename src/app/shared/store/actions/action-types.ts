// import * as AuthActions from './auth.actions';
import * as UserActions from './users.actions';

export { UserActions };

const actionTypes = { ...UserActions };

export const allActionTypes = Object.values(actionTypes);
