import React from 'react';
import { Menu } from 'antd';
import { StyledContainer, StyledSection } from 'components/userMenu/styles';
import {
  dashboard, profile, users, logout,
} from 'components/userMenu/constants';
import { IUser } from 'utils/types';

// добавить обработчик на клик по кнопке, который будет переводить на соответствующие страницы ;
// времено добавленный пользователь
// const user: IUser  = {
//   _id: 'qwe',
//   name: 'string',
//   role: 'superAdmin',
// };

// получаем роль у user  нам нужна именно роль, а не доступы

const getUserRole = (user: IUser) => {
  if (!user.role) {
    return 'none';
  }
  return user.role;
};

function UserMenu(user: IUser) {
  const MenuOptions = {
    superAdmin: [dashboard, users, logout],
    hrAdmin: [users, logout],
    employee: [profile, logout],
  };
  const role = getUserRole(user);

  return (
    <StyledContainer>
      <Menu>
        {MenuOptions[role].map((el) => (
          <Menu.Item key={el}>
            {el}
          </Menu.Item>
        ))}
      </Menu>
      <StyledSection>
        <h1> Тут будет полезный контент </h1>
      </StyledSection>
    </StyledContainer>
  );
}
export default UserMenu;
