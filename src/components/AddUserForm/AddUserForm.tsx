import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import LANG from 'language/en';
import { useAppSelector } from 'utils/hooks';
import { SUPER_ADMIN_ROLE } from 'utils/texts-constants';
import API from 'services/api/userApi';
import { ICreateUser } from 'services/reducers/user/api.types';
import { StyledForm } from 'components/AddUserForm/styled';
import InputComponent from 'components/Input';
import schema from 'components/Input/validation';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  role?: string;
};

const AddUserForm:FC = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      role: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const role: string = useAppSelector((state) => state.user.userData.role);
  const showRole = (role === SUPER_ADMIN_ROLE);
  const onFinish = async (values:ICreateUser) => {
    const result = await API.addNewUser(values);
    reset();
    return result;
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const newUser = {
      ...data,
    };
    onFinish(newUser);
    console.log(newUser);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        name="first_name"
        control={control}
        rules={{ required: true }}
        error={errors.first_name}
        onText={LANG['first-name']}
      />
      <InputComponent
        name="last_name"
        control={control}
        rules={{ required: true }}
        error={errors.last_name}
        onText={LANG['last-name']}
      />
      <InputComponent
        name="email"
        control={control}
        rules={{ required: true }}
        error={errors.email}
        onText={LANG.email}
      />
      { showRole && (
      <InputComponent
        name="role"
        control={control}
        rules={{ required: true }}
        error={errors.role}
        onText={LANG.role}
      />
      )}
      <input type="submit" width={40} />
    </StyledForm>
  );
};
export default AddUserForm;
