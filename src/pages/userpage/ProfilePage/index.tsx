import React, { useState } from 'react';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
import LANG from 'lanuage/en';
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
// import { columnsIncome, dataIncome } from 'components/Table/constants';
// времено добавленный пользователь
const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
};

// type LogFn = (m: string, v: string) => string;
// interface Type{
//   type: string;
//   value: string;
//   name: string;
//   pattern: string;
//   title: string;
//   required: true;
//   onChange: (evt: any) => void; text: string;
// }

const ProfilePage = () => {
  const { role } = user;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (name: string, value: string) => {
    console.log(email, firstName, lastName, 'Profile');
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'first-name':
        return setFirstName(value);
      case 'last-name':
        return setLastName(value);
      default:
        return console.log(value);
    }
  };
  const handleSubmit: any = () => {
    // console.log('Click', evt.target);
    const createNewPassword = {
      firstName,
      lastName,
      email,
      password: 'jffghioer',
    };
    if (firstName === '' || lastName === '' || email === '') {
      console.log('new obj didn`t created');
    }
    console.log(createNewPassword, 'new obj create');
    // dispatch(authOperations.logIn({ email, password }));
    // setEmail('');
    // setFirstName('');
    // setLastName('');
  };

  return (
    <>
      <StyledPage>
        <UserMenu {...user} />
        <StyledContent>
          <StyledInfoSection>
            <StyledInputWraper>
              <InputComponent
                type="text"
                name={LANG['first-name']}
                text={LANG['first-name']}
                onInput={handleChange}
              />
              <InputComponent
                type="text"
                name={LANG['last-name']}
                text={LANG['last-name']}
                onInput={handleChange}
              />
              {!(role === EMPLOYEE_ROLE) && (
              <>
                <InputComponent
                  type="email"
                  name={LANG.email}
                  text={LANG.email}
                  onInput={handleChange}
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
              { !(role === EMPLOYEE_ROLE) && (
              <ActionButton
                onClick={(): void => {
                  // eslint-disable-next-line no-console
                  handleSubmit();
                }}
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
