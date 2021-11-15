/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'utils/types';

interface TUserState {
  readonly loggedIn: boolean;
  readonly user: IUser | null;
}

const initialState: TUserState = {
  loggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ user: IUser }>) => {
      state.loggedIn = true;
      state.user = action.payload.user;
    },
    signOut: (state) => {
      state.loggedIn = false;
      state.user = null;
    },
  },
});

export const {
  signIn,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
