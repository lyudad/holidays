import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import * as uuid from 'uuid/v4';
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

const ProfilePage = () => {
  const { role } = user;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (name: string, value: string) => {
    // eslint-disable-next-line no-console
    console.log(name, 'Profile');
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'first-name':
        setFirstName(value);
        break;
      case 'last-name':
        setLastName(value);
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('Ooops');
        break;
    }
  };
  function randomId(): string {
    return uuidv4();
  }
  const handleSubmit: any = () => {
    // console.log('Click', evt.target);
    const createNewPassword = {
      password: randomId(),
      firstName,
      lastName,
      email,
    };
    if (firstName !== '' && lastName !== '' && email !== '') {
      // eslint-disable-next-line no-console
      console.log(createNewPassword, 'new obj create');
      return;
    }
    alert('Try to fill all fields');
    // dispatch(authOperations.logIn({ email, password }));
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
                name="first-name"
                text={LANG['first-name']}
                onInput={handleChange}
              />
              <InputComponent
                type="text"
                name="last-name"
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
