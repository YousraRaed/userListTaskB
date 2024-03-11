import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatusTypeEnum } from '../models/status.enum';
import { User } from '../models/user.model';
import { UserClientService } from '../outbound/user.client.service';
import { deleteUserLoaded } from '../store/actions/users.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserClientService {
  constructor() {}
  getUsers(): Observable<User[]> {
    const users: User[] = [
      {
        id: 1,
        name: 'ahmed',
        email: 'a@test.com',
        phone: 4353453543,
        status: StatusTypeEnum.ACTIVE,
      },
      {
        id: 2,
        name: 'omar',
        email: 'a@test.com',
        phone: 372636722,
        status: StatusTypeEnum.ACTIVE,
      },
      {
        id: 3,
        name: 'ali',
        email: 'c@test.com',
        phone: 82736,
        status: StatusTypeEnum.ACTIVE,
      },
    ];
    return of(users);
  }
  createUser(user: User): Observable<User> {
    return of(user);
  }

  deleteUser(userId: number): Observable<number> {
    return of(userId);
  }

  updateUser(user: User): Observable<User> {
    return of(user);
  }
}
