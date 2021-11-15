/* eslint no-param-reassign: "off" */
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
    fetchingUser: (state) => {
      state.isLoading = true;
    },
    fetchingUserSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    fetchingUserError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signIn,
  signOut,
  fetchingUser,
  fetchingUserSuccess,
  fetchingUserError,
} = userSlice.actions;

export default userSlice.reducer;
