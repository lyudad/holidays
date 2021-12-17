import axios from 'axios';
import { SendValues } from 'pages/userpage/ProfilePage/usePassword-types';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

async function sendUserMail(data: SendValues, token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  try {
    const response = await axios.post('/user/mail', data);
    return response.data;
  } catch (error) {
    return error;
  }
}
export default sendUserMail;
