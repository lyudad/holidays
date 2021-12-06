import axios from 'axios';
import { UserValues } from './usePassword-types';
// eslint-disable-next-line no-console
console.log(process.env);
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

async function sendUserMail(data: UserValues) {
  try {
    const response = await axios.post('/mail', data);
    return response.data;
  } catch (error) {
    return error;
  }
}
export default sendUserMail;
