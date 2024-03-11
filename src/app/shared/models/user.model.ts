import { StatusTypeEnum } from './status.enum';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  status: StatusTypeEnum;
}
