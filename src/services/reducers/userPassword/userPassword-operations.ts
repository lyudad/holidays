import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_PASSWORD_ERROR,
  ADD_PASSWORD_REQUEST,
  ADD_PASSWORD_SUCCESS,
  FormValues,
} from './usePassword-interfaces';

axios.defaults.baseURL = 'http://localhost:3004';

const addUserPassword = (data: FormValues) => (dispatch:
(newState: { type: string, payload?: FormValues }) => void) => {
  const { firstName, lastName, email } = data;

  const user = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
  };

  dispatch({ type: ADD_PASSWORD_REQUEST });

  axios.post('/user', user)
    .then((res) => dispatch({ type: ADD_PASSWORD_SUCCESS, payload: res.data }))
    .catch((error) => dispatch({ type: ADD_PASSWORD_ERROR, payload: error }));
};

export default addUserPassword;
