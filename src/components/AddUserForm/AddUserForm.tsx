import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import LANG from 'language/en';
import { useAppSelector } from 'utils/hooks';
import { SUPER_ADMIN_ROLE } from 'utils/texts-constants';
import InputComponent from 'components/Input';
import schema from 'components/Input/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from 'antd';
import { StyledForm } from 'components/AddUserForm/styled';

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  role?: string;
};
interface INewUser {
  first_name: string;
  last_name: string;
  email: string;
  role?: string | undefined;
}
interface CreateUserForm {
  isModalOpen: boolean;
  onFinish: (values: INewUser) => void;
  toggleModal: () => void;

}

const AddUserForm:FC<CreateUserForm> = ({
  isModalOpen,
  onFinish,
  toggleModal,
}) => {
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
      role: undefined,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const role: string = useAppSelector((state: any) => state.user.userData.role);
  const showRole:boolean = (role === SUPER_ADMIN_ROLE);

  const onCancel = (): void => {
    reset();
    toggleModal();
  };
  const onSubmit: SubmitHandler<FormValues> = (data):void => {
    const newUser:INewUser = {
      ...data,
    };
    onFinish(newUser);
    reset();
  };

  return (
    <Modal
      title={LANG.addNewUser}
      centered
      visible={isModalOpen}
      onOk={handleSubmit(onSubmit)}
      onCancel={onCancel}
      width={410}
    >
      <StyledForm>
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
      </StyledForm>
    </Modal>
  );
};
export default AddUserForm;
