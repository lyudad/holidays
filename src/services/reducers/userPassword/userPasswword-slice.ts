/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'utils/types';

interface TUserState {
  readonly userPass: IUser | {};
}

const initialState: TUserState = {
  userPass: {},
};

export const userSlice = createSlice({
  name: 'userPass',
  initialState,
  reducers: {
    newPass: (state, action: PayloadAction<{ userPass: IUser }>) => {
      state.userPass = action.payload.userPass;
    },
  },
});

export const {
  newPass,
} = userSlice.actions;

export default userSlice.reducer;