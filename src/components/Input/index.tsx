import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import StyledInput from 'components/Input/styled';
import { useController, UseControllerProps } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

function InputComponent(props: UseControllerProps<FormValues>) {
  const { field } = useController(props);
  const { name } = props;

  return (
    <StyledInput>
      <Input
        {...field}
        placeholder={name}
        type="text"
        prefix={<UserOutlined />}
      />
    </StyledInput>
  );
}

export default InputComponent;
