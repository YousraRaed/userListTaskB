import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { AUTH_SERVICE } from './auth.client.service';
import { USER_CLIENT_SERVICE } from './user.client.service';

export const REST_CLIENT_SERVICES = [
  {
    provide: USER_CLIENT_SERVICE,
    useClass: UserService,
  },
  {
    provide: AUTH_SERVICE,
    useClass: AuthService,
  },
];
