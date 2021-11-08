import React from 'react';
import { Menu } from 'antd';
import { StyledContainer, StyledMenu } from 'components/userMenu/styles';

import LANG from 'lanuage/en';
import { IUser } from 'utils/types';

// добавить обработчик на клик по кнопке, который будет переводить на соответствующие страницы ;
// времено добавленный пользователь
const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
};

// получаем роль у user  нам нужна именно роль, а не доступы

// const getUserRole = user.role;

const UserMenu = () => {
  const MenuOptions = {
    superAdmin: [LANG.dashboard, LANG.users, LANG.logout],
    hrAdmin: [LANG.users, LANG.logout],
    employee: [LANG.profile, LANG.logout],
  };
  const { role } = user;

  return (
    <StyledContainer>
      <StyledMenu>
        { MenuOptions[role].map((el: string) => (
          <Menu.Item key={el}>
            {el}
          </Menu.Item>
        ))}
      </StyledMenu>
    </StyledContainer>
  );
};
export default UserMenu;
