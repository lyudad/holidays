import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import StyledInput from 'components/Input/styles';
// type Ifoo = () => HTMLElement;
const InputComponent = (placeholder: any) => (
  <StyledInput>
    <Input placeholder={placeholder} prefix={<UserOutlined />} />
  </StyledInput>
);

export default InputComponent;
