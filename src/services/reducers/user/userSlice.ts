/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReturnUser } from 'utils/types';
import type { RootState } from '../../../store';

export interface IUserState {
  readonly userData: ReturnUser | null;
  readonly token: null | string;
  readonly loggedIn: boolean;
}

const initialState: IUserState = {
  userData: null,
  token: null,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction< ReturnUser >) => {
      state.userData = action.payload;
      state.token = action.payload.token;
      state.loggedIn = true;
    },
    signOut: (state) => {
      state.userData = null;
      state.token = null;
      state.loggedIn = false;
    },
  },
});

export const {
  signIn,
  signOut,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
