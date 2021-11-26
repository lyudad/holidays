import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
import UserMenu from 'components/userMenu';
import TableComponent from 'components/Table';
import schema from 'components/Input/validation';
import addUserPassword from 'services/reducers/userPassword/userPassword-operations';
import { IUser } from 'utils/types';
import { EMPLOYEE_ROLE, ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import { useDispatch } from 'react-redux';
import {
  StyledPage,
  StyledContent,
  StyledInputWraper,
  StyledInfoSection,
  StyledButton,
  TableWraper,
  StyledWrapInput,
  StyledNotification,
} from 'pages/userpage/ProfilePage/styles';

// времено добавленный пользователь
const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
const ProfilePage = () => {
  const { role } = user;

  const dispatch = useDispatch();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data: FormValues) => {
    const { firstName, lastName, email } = data;

    dispatch(addUserPassword({
      firstName,
      lastName,
      email,
    }));
    reset();
  };

  return (
    <>
      <StyledPage>
        <UserMenu {...user} />
        <StyledContent>
          <StyledInfoSection>
            <StyledInputWraper>
              <StyledWrapInput>
                <InputComponent
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                />
                <StyledNotification>
                  {errors.firstName?.message}
                </StyledNotification>
              </StyledWrapInput>
              <StyledWrapInput>
                <InputComponent
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                />
                <StyledNotification>
                  {errors.lastName?.message}
                </StyledNotification>
              </StyledWrapInput>
              {!(role === EMPLOYEE_ROLE) && (
                <>
                  <StyledWrapInput>
                    <InputComponent
                      name="email"
                      control={control}
                      rules={{ required: true }}
                    />
                    <StyledNotification>
                      {errors.email?.message}
                    </StyledNotification>
                  </StyledWrapInput>
                  <ActionButton>{ADD_USER_BUTTON_TEXT}</ActionButton>
                </>
              )}
            </StyledInputWraper>
            <DaysCounter sickDays={5} vacationDays={15} />
            <StyledButton>
              <ActionButton
                onClick={(): void => {
                  // eslint-disable-next-line no-console
                  console.log('cliked');
                }}
              >
                Add
              </ActionButton>
              {!(role === EMPLOYEE_ROLE) && (
                <ActionButton
                  onClick={
                    handleSubmit(onSubmit)
                  }
                >
                  send password
                </ActionButton>
              )}
            </StyledButton>
          </StyledInfoSection>
          <TableWraper>
            <TableComponent />
          </TableWraper>
        </StyledContent>
      </StyledPage>
    </>
  );
};

export default ProfilePage;
