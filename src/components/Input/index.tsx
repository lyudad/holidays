import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import StyledInput from 'components/Input/styled';

type Props = {
  text: string,
  type: string,
  name: string,
  updateData: string | null,
  onInput: (name: string, value: string) => void
};
// interface IState {
//   value: string | null | '',
// }
function InputComponent(
  {
    text,
    type,
    name,
    updateData,
    onInput,
  }: Props,
) {
  const [value, setValue] = useState<string>('');
  useEffect(() => {
    if (updateData === '') {
      setValue(updateData);
    }
  }, [updateData]);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
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
