/* eslint-disable no-console */
import { Form, Button } from 'antd';
import React, { FC } from 'react';
import 'antd/dist/antd.css';
import { StyledForm, StyledInput, StyledMessage } from './styles';
import { INPUT_MESSAGE } from './const';

const Auth: FC = () => {
  const onFinish = () => {
    console.log('Success:');
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
        <StyledInput placeholder="login" />
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
