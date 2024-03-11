import { createAction } from '@ngrx/store';
import { Auth } from '../../models/auth.model';

export const signIn = createAction(
  '[Sign In Page] signIn',
  (payload: Partial<Auth>) => ({ payload })
);
export const signedIn = createAction(
  '[SignedIn ] signedIn',
  (payload: Partial<Auth>) => ({ payload })
);
export const signOut = createAction('[Sign out Page] signOut');
export const signedOut = createAction(
  '[SignedOut ] signedOut',
  (payload: boolean) => ({ payload })
);
