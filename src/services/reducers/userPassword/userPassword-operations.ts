/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable  */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  pushPassRequest,
  // pushPassSuccess,
  // pushPassError,
} from './userPassword-actions';

axios.defaults.baseURL = 'http://localhost:3004';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const addUserPassword = (data: FormValues) => (dispatch : any) => {
    const { firstName, lastName, email } = data;

    const contactNew = {
        id: uuidv4(),
        firstName,
        lastName,
        email,
    };

    dispatch(pushPassRequest());

    axios.post(
        '/user', contactNew)
        .then(res => dispatch({type: 'user/addPasswordSuccess', payload: res.data}))
        .catch(error => dispatch({type: 'user/addPasswordError', payload: error}));
};

export default addUserPassword;