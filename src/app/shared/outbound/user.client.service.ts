import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { User } from '../models/user.model';

export const USER_CLIENT_SERVICE = new InjectionToken<string>(
  'USER_CLIENT_SERVICE'
);

export interface UserClientService {
  getUsers(): Observable<User[]>;
  createUser(user: Partial<User>): Observable<User>;
  updateUser(user: Partial<User>): Observable<User>;
  deleteUser(id: number): Observable<number>;
}
