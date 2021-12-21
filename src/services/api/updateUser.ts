import axios from 'axios';
import { SendUpdateValues } from 'pages/userpage/ProfilePage/usePassword-types';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

async function updateById(id: string, data: SendUpdateValues, token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  try {
    const response = await axios.patch(`/user/update/${id}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
}
export default updateById;
