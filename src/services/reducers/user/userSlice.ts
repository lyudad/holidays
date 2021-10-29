/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { employeeRole, hrAdminRole, superAdminRole } from 'utils/data';
import { IPermissionsSet, IUser } from 'utils/types';

interface TUserState {
  readonly loggedIn: boolean;
  readonly user: IUser | null;
  permissions: IPermissionsSet | null;
}

const initialState: TUserState = {
  loggedIn: false,
  user: null,
  permissions: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ user: IUser }>) => {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.permissions = action.payload.user.role === 'superAdmin'
        ? superAdminRole
        : action.payload.user.role === 'hrAdmin'
          ? hrAdminRole
          : employeeRole;
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
