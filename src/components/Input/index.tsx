import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function InputComponent(placeholder: any) {
  return <Input placeholder={placeholder} prefix={<UserOutlined />} />;
}

export default InputComponent;
