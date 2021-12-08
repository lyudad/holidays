import React, { FC } from 'react';
import { Form, Button } from 'antd';
// import type { RootState } from '../../store';
import 'antd/dist/antd.css';
import { useAppDispatch } from '../../utils/hooks';
import { StyledForm, StyledInput, StyledMessage } from './styles';
import { INPUT_MESSAGE } from './const';

import { signIn } from '../../services/reducers/user/userSlice';
import loginUser from '../../services/api/userApi';
// import { IUser } from '../../utils/types';

type ReturnUser = {

  token: string
  id: number;
  first_name: string;
  role: string;
  is_blocked: string;

};
const Auth: FC = () => {
  // const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
    const userData = await loginUser(values);

    const payload:ReturnUser = {
      ...userData,
    };
    dispatch(signIn(payload));
  };

  const onFinishFailed = () => {
    console.log('Failed:');
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
    </StyledForm>
  );
};
export default Auth;
