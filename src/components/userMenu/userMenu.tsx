import React from 'react';
import { Menu } from 'antd';
import { StyledContainer, StyledSection } from 'components/userMenu/styles';
import LANG from 'language/en';
import { IUser } from 'utils/types';

// добавить обработчик на клик по кнопке, который будет переводить на соответствующие страницы ;

// получаем роль у user  нам нужна именно роль, а не доступы

const getUserRole = (user: IUser) => user.role;

function UserMenu(user: IUser) {
  const MenuOptions = {
    superAdmin: [LANG.dashboard, LANG.users, LANG.logout],
    hrAdmin: [LANG.users, LANG.logout],
    employee: [LANG.profile, LANG.logout],
  };
  const role = getUserRole(user);

  return (
    <StyledContainer>
      <Menu>
        { MenuOptions[role].map((el: string) => (
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
