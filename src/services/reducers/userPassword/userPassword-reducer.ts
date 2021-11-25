/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable  */
// import { combineReducers } from 'redux';
import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  pushPassRequest,
  pushPassSuccess,
  // pushPassError,
} from './userPassword-actions';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState = [] as User[];


const userPasswordReducer = createReducer(initialState, {
  [pushPassRequest as any]: (_: any, { payload }: any) =>
  {
      // eslint-disable-next-line no-console
      console.log( payload, 'reducer');
      return payload;
  },

  [pushPassSuccess as any]: (state, { payload }: any) => {
     // eslint-disable-next-line no-console
    console.log(state, payload, 'reducer');
    return [state, ...payload]
  },
});


export default userPasswordReducer;