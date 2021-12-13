import React, { FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import LANG from 'language/en';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
import UserMenu from 'components/userMenu';
import TableComponent from 'components/Table';
import sendUserMail from 'services/reducers/userPassword/userPassword-api-server';
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
} from 'pages/userpage/ProfilePage/styles';
import { FormValues } from 'services/reducers/userPassword/usePassword-types';

// времено добавленный пользователь
const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
  token: ' ',
};
const ProfilePage: FunctionComponent = () => {
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
    sendUserMail(userData);
    reset();
  };

  return (
    <>
      <StyledPage>
        <UserMenu />
        <StyledContent>
          <StyledInfoSection>
            <StyledInputWraper>
              <InputComponent
                name="firstName"
                control={control}
                rules={{ required: true }}
                error={errors.firstName}
                onText={LANG['first-name']}
              />
              <InputComponent
                name="lastName"
                control={control}
                rules={{ required: true }}
                onText={LANG['last-name']}
                error={errors.lastName}
              />
              {!(role === EMPLOYEE_ROLE) && (
                <>
                  <InputComponent
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    error={errors.email}
                    onText={LANG.email}
                  />
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
