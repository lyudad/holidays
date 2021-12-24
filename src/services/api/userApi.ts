import axios from 'axios';
import { ILoginData, ICreateUser } from 'services/reducers/user/api.types';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const jwtToken = {
  set(token:string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

async function loginUser(data: ILoginData):Promise<any> {
  try {
    const email = data.login;
    const { password } = data;
    const response = await axios.post('/auth/login', { email, password });
    jwtToken.set(response.data.token);

    return response.data;
  } catch (error) {
    return error;
  }
}

async function logoutUser() :Promise<any> {
  try {
    await axios.post('/user/logout');
    jwtToken.unset();
    return 'ok';
  } catch (error) {
    return error;
  }
}

async function addNewUser(data :ICreateUser):Promise<any> {
  try {
    const response = await axios.post('user/create', { ...data });
    return response;
  } catch (error) {
    return error;
  }
}

const API = { loginUser, logoutUser, addNewUser };
export default API;
