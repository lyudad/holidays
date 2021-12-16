import axios from 'axios';
import { SendValues } from 'pages/userpage/ProfilePage/usePassword-types';
import { store } from 'store';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = {
  token: store.getState().user.token,
};
axios.defaults.headers.common.Authorization = `Bearer ${token.token}`;

async function sendUserMail(data: SendValues) {
  try {
    const response = await axios.post('/user/mail', data);
    return response.data;
  } catch (error) {
    return error;
  }
}
export default sendUserMail;
