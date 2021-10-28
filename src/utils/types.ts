export type TUserRole = 'super' | 'admin' | 'employee';

export interface IUser {
  _id: string;
  name: string;
  role: TUserRole;
}
