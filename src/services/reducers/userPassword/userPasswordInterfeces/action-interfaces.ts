/* eslint-disable eol-last */
export const ADD_PASSWORD_REQUEST = '@user/addPasswordRequest';
export const ADD_PASSWORD_SUCCESS = '@user/addPasswordSuccess';
export const ADD_PASSWORD_ERROR = '@user/addPasswordError';
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}

export interface IActionSuccess {
  type: typeof ADD_PASSWORD_SUCCESS,
  payload: IUser[],
}

interface IActionRequest {
  type: typeof ADD_PASSWORD_REQUEST,
  payload: IUser[],
}
interface IActionError {
  type: typeof ADD_PASSWORD_ERROR,
  payload: any,
}

export type ActionsTypes = IActionError | IActionRequest | IActionSuccess;