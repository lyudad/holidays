import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
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
import { IUser } from 'utils/types';
import { EMPLOYEE_ROLE, ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';

// import { useDispatch } from 'react-redux';
// import pushUserPass from 'services/reducers/userPassword/userPassword-actions';
// import { columnsIncome, dataIncome } from 'components/Table/constants';
// времено добавленный пользователь
const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
};

const schema = yup.object({
  firstName: yup.string().max(10, 'Name must be shorter'),
  lastName: yup.string().max(10, 'Name must be shorter'),
  email: yup.string().email().max(20, 'Name must be shorter'),
}).required();

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
const ProfilePage = () => {
  const { role } = user;
  // const [value, setValue] = useState<string>('');
  // const dispatch = useDispatch();

  //   const {
  //   handleSubmit,
  //   register,
  // } = useForm({
  //   validationShema: yup.object({
  //  firstName<string>: yup.string().max(10, 'Name must be shorter')required('Required'),
  //  lastName: yup.string().max(10, 'Name must be shorter')required('Required'),
  //   email: yup.string().email(),
  // });

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
    if (firstName !== '' && lastName !== '' && email !== '') {
      // eslint-disable-next-line no-console
      console.log('new obj create');
      // setValue('');
      // dispatch(pushUserPass({
      //   firstName,
      //   lastName,
      //   email,
      // }));
      return;
    }
    // eslint-disable-next-line no-alert
    alert('Try to fill all fields');
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
