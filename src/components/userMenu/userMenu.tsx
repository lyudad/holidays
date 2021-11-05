import React from 'react';
import { Menu } from 'antd';
import { StyledContainer } from 'components/userMenu/styles';
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
  const handleClick = (e: React.HTMLProps<HTMLButtonElement>) => {
    console.log('click ', e);
  };
  return (
    <StyledContainer>
      <Menu>
        { MenuOptions[role].map((el: string) => (
          <Menu.Item key={el} onClick={handleClick}>
            {el}
          </Menu.Item>
        ))}
      </Menu>
    </StyledContainer>
  );
}
export default UserMenu;
