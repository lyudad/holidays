import axios from 'axios';
import { SendValues } from './usePassword-types';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

async function sendUserMail(data: SendValues) {
  try {
    const response = await axios.post('/user/mail', data);
    return response.data;
  } catch (error) {
    return error;
  }
}
export default sendUserMail;
