import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import StyledInput from 'components/Input/styled';
import {
  Controller, FieldError, FieldValues, UseControllerProps,
} from 'react-hook-form';

interface Props<T> extends UseControllerProps<T> {
  error: FieldError | undefined,
  onText: string,
}

function InputComponent<T extends FieldValues>({
  name, control, error, onText,
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'This is required',
      }}
      render={({ field: { onChange, value } }) => (
        <StyledInput>
          <Input
            style={error && { boxShadow: '0 0 0 2px rgba(245, 62, 39, 0.46)', border: '1px solid red' }}
            prefix={<UserOutlined />}
            placeholder={onText}
            value={value}
            onChange={(text) => {
              onChange(text);
            }}
          />
          {error && <span style={{ color: 'red' }}>{error?.message}</span>}
        </StyledInput>
      )}
    />
  );
}

export default InputComponent;
