// import React from 'react';
import React, { useState } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import StyledInput from 'components/Input/styled';

type Props = {
  text: string,
  type: string,
  name: string,
  onInput: (name: string, value: string) => any
};

function InputComponent(
  {
    text,
    type,
    name,
    onInput,
  }: Props,
) {
  const [value, setValue] = useState('');
  const handleChange = (evt: any) => {
    setValue(evt.target.value);
    const currentValue: string = evt.target.value;
    const currentName: string = evt.currentTarget.name;
    onInput(currentName, currentValue);
  };
  return (
    <StyledInput>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={text}
        prefix={<UserOutlined />}
      />
    </StyledInput>

  );
}
export default InputComponent;
