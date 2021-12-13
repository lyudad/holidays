import React, { FC } from 'react';
import { Form, Button } from 'antd';
import 'antd/dist/antd.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'utils/hooks';
import { StyledForm, StyledInput, StyledMessage } from 'components/SingIn/styles';
import INPUT_MESSAGE from 'components/SingIn//const';
import { signIn } from 'services/reducers/user/userSlice';
import API from 'services/api/userApi';
import { EMPLOYEE_ROLE, LOGIN_ERROR } from 'utils/texts-constants';

type ReturnUser = {

  token: string
  id: number;
  first_name: string;
  role: string;
  is_blocked: string;

};
const Auth: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notify = () => toast(LOGIN_ERROR);

  const toNextPage = (role:string):void => {
    if (role === EMPLOYEE_ROLE) {
      navigate('/userpage');
      return;
    }
    navigate('/users/dash');
  };
  const onFinish = async (values: any) => {
    const userData = await API.loginUser(values);
    if (!userData.id) {
      notify();
      return;
    }
    const { role } = userData;
    const payload:ReturnUser = {
      ...userData,
    };
    dispatch(signIn(payload));

    toNextPage(role);
  };
  const onFinishFailed = () => {
    notify();
  };

  return (
    <StyledForm
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="login"
        rules={[
          {
            required: true,
            message: <StyledMessage>{INPUT_MESSAGE.login}</StyledMessage>,
          },
        ]}
      >
        <StyledInput placeholder="login" id="email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: <StyledMessage>{INPUT_MESSAGE.password}</StyledMessage>,
          },
        ]}
      >
        <StyledInput placeholder="password" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
      <ToastContainer />
    </StyledForm>
  );
};
export default Auth;
