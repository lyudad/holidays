/* eslint no-param-reassign: "off" */
import React, {createContext} from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'utils/types';

type HolidayType = {
    id: number;
    name: string;
}

type InitialStateType = {
  holidays: HolidayType[];
  leafes_sick: HolidayType[];
}

const initialState = {
  holidays: [],
   leafes_sick: [], 
}

const AppContext = createContext<InitialStateType>(initialState);

export const userDatePicker = (state, action: PayloadAction<{ user: IUser }>) => {
  switch (action.type) {
      case 'CREATE_DATE':
      return [
          ...state,
          {
          id: action.payload.id,
          name: action.payload.name,
          }
      ]
      case 'CHOOSE_HOLIDAYS':
      return [
          ...state.filter(holidays => holidays.id !== action.payload.id),
      ]
       case 'CHOOSE_LEAFES_SICK':
      return [
         ...state.filter(leafes_sick => holidays.id !== action.payload.id),
      ]
      default:
      return state;
  
}
}

export default userDatePicker;
