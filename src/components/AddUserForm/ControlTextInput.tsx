import React from 'react';
import {
  Controller, FieldError, FieldValues, UseControllerProps,
} from 'react-hook-form';

interface Props<T> extends UseControllerProps<T> {
  error: FieldError | undefined;
}

const ControlTextInput = <T extends FieldValues>({ name, control, error }: Props<T>) => (
  <Controller
    name={name}
    control={control}
    rules={{
      required: 'This is required',
    }}
    render={({ field: { onChange } }) => (
      <>
        <input
          onChange={(text) => {
            onChange(text);
          }}
        />
        {error && <span style={{ color: 'red' }}>{error?.message}</span>}
      </>
    )}
  />
);

export default ControlTextInput;
