/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';

export interface IModalState {
  isModalOpen: boolean;
}

const initialState: IModalState = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state:IModalState) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});
export const { toggle } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;
export default modalSlice.reducer;
