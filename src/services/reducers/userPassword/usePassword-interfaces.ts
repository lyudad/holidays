export const ADD_PASSWORD_REQUEST = '@user/addPasswordRequest';
export const ADD_PASSWORD_SUCCESS = '@user/addPasswordSuccess';
export const ADD_PASSWORD_ERROR = '@user/addPasswordError';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}
export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
export interface IActionSuccess {
  type: typeof ADD_PASSWORD_SUCCESS,
  payload: IUser[],
}

export interface IActionRequest {
  type: typeof ADD_PASSWORD_REQUEST,
  payload: IUser[],
}
export interface IActionError {
  type: typeof ADD_PASSWORD_ERROR,
  payload: any,
}

export type ActionsTypes = IActionError | IActionRequest | IActionSuccess;
