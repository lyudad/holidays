import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

async function getById(id: string, token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  try {
    const response = await axios.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
export default getById;
