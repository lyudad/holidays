import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

// interface State {
//   email: string,
//   firstName: string,
//   lastName: string
// }

const ProfilePage = () => {
  const { role } = user;
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [data, setData] = useState<string | null>(null);

  const handleChange = (name: string, value: string) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
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
  const handleSubmit = (): void => {
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
      setEmail('');
      setFirstName('');
      setLastName('');
      setData('');
      return;
    }
    // eslint-disable-next-line no-alert
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
                name="firstName"
                text={LANG['first-name']}
                onInput={handleChange}
                updateData={data}
              />
              <InputComponent
                type="text"
                name="lastName"
                text={LANG['last-name']}
                onInput={handleChange}
                updateData={data}
              />
              {!(role === EMPLOYEE_ROLE) && (
              <>
                <InputComponent
                  type="email"
                  name={LANG.email}
                  text={LANG.email}
                  onInput={handleChange}
                  updateData={data}
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
                onClick={() => {
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
