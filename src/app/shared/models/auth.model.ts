import { RoleEnum } from './role.enum';

export interface Auth {
  username: string;
  password: string;
  role: RoleEnum;
}
