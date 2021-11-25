// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import StyledInput from 'components/Input/styled';
import { useController, UseControllerProps } from 'react-hook-form';

// import { FieldValues, UseControllerReturn } from 'react-hook-form';
// import { UseFormRegisterReturn } from 'react-hook-form';
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

function InputComponent(props: UseControllerProps<FormValues>) {
  // const { field } = useController(props);
  const { field } = useController(props);
  const { name } = props;
  // const [value, setValue] = useState<string>('');
  // useEffect(() => {
  //   if (updateData === '') {
  //     setValue(updateData);
  //   }
  // }, [updateData]);

  return (
    <StyledInput>
      <Input
        {...field}
        placeholder={name}
        type="text"
        // name={name}
        // value={value}
        // onChange={handleChange}
        // placeholder={name}
        // ref={register}
        prefix={<UserOutlined />}
      />
    </StyledInput>
  );
}
export default InputComponent;
