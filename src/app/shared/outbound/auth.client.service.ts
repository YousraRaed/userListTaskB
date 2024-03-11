import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';

export const AUTH_SERVICE = Symbol('AUTH_SERVICE');

export interface AuthClientService {
  signIn(username: string, password: string): Observable<Partial<Auth>>;
  signOut(): Observable<boolean>;
}
