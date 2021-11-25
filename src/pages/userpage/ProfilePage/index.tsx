import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IUser } from 'utils/types';
import { EMPLOYEE_ROLE, ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
import { useDispatch } from 'react-redux';
// import LANG from 'lanuage/en';
import {
  StyledPage,
  StyledContent,
  StyledInputWraper,
  StyledInfoSection,
  StyledButton,
  TableWraper,
} from 'pages/userpage/ProfilePage/styles';
import UserMenu from 'components/userMenu';
import TableComponent from 'components/Table';
import addUserPassword from 'services/reducers/userPassword/userPassword-operations';

// времено добавленный пользователь
const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
};

const schema = yup.object({
  firstName: yup.string().min(2, 'First Name must be longer').max(10, 'First Name must be shorter'),
  lastName: yup.string().min(2, 'Last Name must be longer').max(10, 'Last name must be shorter'),
  email: yup.string().email().min(4, 'Email must be longer').max(30, 'Email must be shorter'),
}).required();

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
const ProfilePage = () => {
  const { role } = user;
  // const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-console
    const { firstName, lastName, email } = data;
    // eslint-disable-next-line no-console
    console.log(firstName, lastName, email);
    dispatch(addUserPassword({
      firstName,
      lastName,
      email,
    }));
  };

  return (
    <>
      <StyledPage>
        <UserMenu {...user} />
        <StyledContent>
          <StyledInfoSection>
            <StyledInputWraper>
              <InputComponent
                // type="text"
                name="firstName"
                // text={LANG['first-name']}
                control={control}
                rules={{ required: true }}
              />
              <p>{errors.firstName?.message}</p>
              <InputComponent
                // type="text"
                name="lastName"
                control={control}
                // text={LANG['last-name']}
                rules={{ required: true }}
              />
              <p>{errors.lastName?.message}</p>
              {!(role === EMPLOYEE_ROLE) && (
                <>
                  <InputComponent
                    // type="email"
                    name="email"
                    // text={LANG.email}
                    control={control}
                    rules={{ required: true }}
                  // updateData={data}
                  />
                  <p>{errors.email?.message}</p>
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
