import React, {
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { CheckOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
import UserMenu from 'components/userMenu';
import TableComponent from 'components/Table';
import sendUserMail from 'services/api/userPasswordApi';
import getById from 'services/api/getById';
import updateById from 'services/api/updateUser';
import schema from 'components/Input/validation';
import UserData from 'pages/users/users.types';
import { store } from 'store';
import { EMPLOYEE_ROLE } from 'utils/texts-constants';
import {
  StyledPage,
  StyledContent,
  StyledInputWraper,
  StyledInfoSection,
  StyledButton,
  TableWraper,
  StyledBtnAddPass,
} from 'pages/userpage/ProfilePage/styles';
import { FormValues } from 'pages/userpage/ProfilePage/usePassword-types';

const ProfilePage: FunctionComponent = () => {
  const { userData, token } = store.getState().user;
  const location = useLocation().state;
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const currentId = location ? location.user_id : userData.id;

  const fieldValues = (option: string): string => {
    if (userInfo) {
      switch (option) {
        case 'first_name':
          return userInfo.first_name;
        case 'last_name':
          return userInfo.last_name;
        case 'email':
          return userInfo.email;
        default:
          return '';
      }
    }
    return '';
  };

  const defaultValues = {
    firstName: `${fieldValues('first_name')}`,
    lastName: `${fieldValues('last_name')}`,
    email: `${fieldValues('email')}`,
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    const { firstName, lastName, email } = data;
    const userCreated = {
      first_name: firstName,
      last_name: lastName,
      email,
    };
    sendUserMail(userCreated, token);
  };
  const onSubmitSaveUser = (data: FormValues) => {
    const { firstName, lastName, email } = data;
    const userCreated = {
      id: currentId,
      first_name: firstName,
      last_name: lastName,
      email,
    };
    setUserInfo(userCreated);
    updateById(userCreated.id, userCreated, token);
  };
  useEffect(() => {
    getById(currentId, token).then((data) => {
      const userCreated = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
      };

      setUserInfo(userCreated);
      // eslint-disable-next-line no-console
    }).catch((error) => console.log(error));
  }, [currentId, token]);
  useEffect(() => {
    if (userInfo) {
      reset(defaultValues);
    }
  }, [userInfo]);

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
                onText={fieldValues('first_name')}
              />
              <InputComponent
                name="lastName"
                control={control}
                rules={{ required: true }}
                onText={fieldValues('last_name')}
                error={errors.lastName}
              />
              {!(userData.role === EMPLOYEE_ROLE) && (
                <>
                  <InputComponent
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    error={errors.email}
                    onText={fieldValues('email')}
                  />
                  <ActionButton
                    onClick={handleSubmit(onSubmitSaveUser)}
                  >
                    <CheckOutlined />
                  </ActionButton>
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
              {!(userData.role === EMPLOYEE_ROLE) && (
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
          <TableWraper>
            <TableComponent />
          </TableWraper>
        </StyledContent>
      </StyledPage>
    </>
  );
};

export default ProfilePage;
