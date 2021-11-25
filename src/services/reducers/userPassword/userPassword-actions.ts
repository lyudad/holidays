/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

import { createAction } from '@reduxjs/toolkit';

export const pushPassRequest = createAction('user/addPasswordRequest');
export const pushPassSuccess = createAction('user/addPasswordSuccess');
export const pushPassError = createAction('user/addPasswordError');