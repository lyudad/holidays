import React, { FunctionComponent } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import LANG from 'language/en';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
import UserMenu from 'components/userMenu';
import TableComponent from 'components/Table';
import sendUserMail from 'services/api/userPasswordApi';
import schema from 'components/Input/validation';
import { store } from 'store';
// import { useAppSelector } from 'utils/hooks';
import { EMPLOYEE_ROLE, ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import {
  StyledPage,
  StyledContent,
  StyledInputWrapper,
  StyledInfoSection,
  StyledButton,
  TableWrapper,
  StyledBtnAddPass,
} from 'pages/userpage/ProfilePage/styles';
import { FormValues } from 'pages/userpage/ProfilePage/usePassword-types';

const ProfilePage: FunctionComponent = () => {
  const { role } = store.getState().user.userData;
  const jwtToken = store.getState().user.token;

  const {
    handleSubmit,
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
      first_name: firstName,
      last_name: lastName,
      email,
    };
    sendUserMail(userData, jwtToken);
  };

  return (
    <>
      <StyledPage>
        <UserMenu />
        <StyledContent>
          <StyledInfoSection>
            <StyledInputWrapper>
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
              {(role !== EMPLOYEE_ROLE) && (
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
            </StyledInputWrapper>
            <DaysCounter sickDays={5} vacationDays={15} />
            <StyledButton>
              <ActionButton
                onClick={(): void => {
                  // eslint-disable-next-line no-console
                  console.log('clicked');
                }}
              >
                Add
              </ActionButton>
              {(role !== EMPLOYEE_ROLE) && (
                <StyledBtnAddPass
                  onClick={
                    handleSubmit(onSubmit)
                  }
                >
                  send password
                </StyledBtnAddPass>
              )}
            </StyledButton>
          </StyledInfoSection>
          <TableWrapper>
            <TableComponent />
          </TableWrapper>
        </StyledContent>
      </StyledPage>
    </>
  );
};

export default ProfilePage;
