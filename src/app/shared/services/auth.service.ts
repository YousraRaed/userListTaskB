import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth } from '../models/auth.model';
import { RoleEnum } from '../models/role.enum';
import { AuthClientService } from '../outbound/auth.client.service';

@Injectable()
export class AuthService implements AuthClientService {
  constructor() {}

  signIn(username: string, password: string): Observable<Partial<Auth>> {
    const authUser: Partial<Auth> = {
      username,
    };
    if (username === 'admin') {
      authUser.role = RoleEnum.ADMIN;
    } else {
      authUser.role = RoleEnum.USER;
    }
    return of(authUser);
  }
  signOut(): Observable<boolean> {
    return of(true);
  }
}
