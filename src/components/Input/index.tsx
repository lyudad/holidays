import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import StyledInput from 'components/Input/styled';

type Props = {
  text: string,
};

const InputComponent = ({ text }:Props) => (
  <StyledInput>
    <Input
      placeholder={text}
      prefix={<UserOutlined />}
    />
  </StyledInput>

);
export default InputComponent;
