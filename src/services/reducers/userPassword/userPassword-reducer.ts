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
import { ActionsTypes, ADD_PASSWORD_SUCCESS, IActionSuccess } from './userPasswordInterfeces/action-interfaces';

type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
interface IDispach {
  type: string,
  payload: IUser| undefined,
}

const initialState = [ { id: '0', firstName: 'Pjj', lastName: 'Yuuu', email: 'dhd@ggh.ic'}] as IUser[];


const userPasswordReducer = createReducer(initialState, {

  [ADD_PASSWORD_SUCCESS]: (state = initialState, action: IDispach) =>
  {

    // console.log(action.payload, 'iooo');
    // return [ state, ...action.payload];
  }
});

// function userPasswordReducer(state = initialState, action: IActionSuccess) {
//   switch (action.type) {
//     case ADD_PASSWORD_SUCCESS:
//       return [state, ...action.payload]
//     default:
//       return state
//   }
// }

export default userPasswordReducer;