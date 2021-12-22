export interface ILoginData {
  login: string;
  password: string;
}
export type ReturnUser = {
  token: string;
  id: number;
  first_name: string;
  role: string;
  is_blocked: string;
};
export type ICreateUser = {
  first_name: string;
  last_name: string;
  email: string;
  role?: string;
};
