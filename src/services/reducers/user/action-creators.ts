/* eslint-disable import/prefer-default-export */
import { AppDispatch } from 'store';
import axios from 'axios';
import { userSlice } from 'userSlice';
import { IUser } from 'utils/types';

export const fetchUsers = () => (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.fetchingUser());
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    dispatch(userSlice.actions.fetchingUserSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.fetchingUser(e.message));
  }
};
