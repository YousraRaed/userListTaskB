import { UserService } from '../services/user.service';
import { USER_CLIENT_SERVICE } from './user.client.service';

export const REST_CLIENT_SERVICES = [
  {
    provide: USER_CLIENT_SERVICE,
    useClass: UserService,
  },
];
