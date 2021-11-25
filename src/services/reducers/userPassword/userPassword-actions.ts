/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

import { createAction } from '@reduxjs/toolkit';

export const pushPassRequest = createAction('users/addPasswordRequest');
export const pushPassSuccess = createAction('users/addPasswordSuccess');
export const pushPassError = createAction('users/addPasswordError');