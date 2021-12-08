import axios from 'axios';
// import { IUser } from '../../utils/types';

interface IloginData {
  login: string;
  password: string;
}
// type ReturnUser = {
//   token: string;
//   id: number;
//   first_name: string;
//   role: string;
//   is_blocked: string;
// };
axios.defaults.baseURL = 'http://localhost:3030';

async function loginUser(data: IloginData) {
  try {
    const email = data.login;
    const { password } = data;
    const response = await axios.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    return error;
    // console.log(error.message);
  }
}
export default loginUser;
