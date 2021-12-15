import axios from 'axios';
import { UserValues } from 'services/reducers/userPassword/usePassword-types';

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
