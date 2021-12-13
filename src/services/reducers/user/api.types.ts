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
