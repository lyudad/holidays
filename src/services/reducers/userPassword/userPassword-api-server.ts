import axios from 'axios';
import { UserValues } from './usePassword-types';

axios.defaults.baseURL = 'http://localhost:3004';

async function SendUserMail(data: UserValues) {
  try {
    const response = await axios.post('/user', data);
    return response.data;
  } catch (error) {
    return error;
  }
}
export default SendUserMail;
