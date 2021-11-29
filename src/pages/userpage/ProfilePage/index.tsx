import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
import UserMenu from 'components/userMenu';
import TableComponent from 'components/Table';
import SendUserMail from 'services/reducers/userPassword/userPassword-api-server';
import schema from 'components/Input/validation';
import { IUser } from 'utils/types';
import { EMPLOYEE_ROLE, ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
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
import { FormValues } from 'services/reducers/userPassword/usePassword-types';

// времено добавленный пользователь
const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
};

const ProfilePage = () => {
  const { role } = user;

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
    const userData = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
    };
    SendUserMail(userData);
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
