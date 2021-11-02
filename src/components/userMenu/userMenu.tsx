import React from 'react';
import { Menu } from 'antd';
import { StyledMenu, StyledWraper } from 'components/userMenu/styles';
import LANG from 'language/en';

// interface Props {
//   function: (role:string) => void;
// }

// по id в базе будет поиск пользователя и его роли, для рендора соответствующих кнопок меню
// const user: IUser = UserModel.findOne(id);
// const { role } = user;
// по роли добавить рендер разделов меню: Dashboard - только для super,
// Profile - employee, User - super+ admin
// добавить обработчик на клик по кнопке, который будет переводить на соответствующие страницы ;
// времено добавленный пользователь
const user = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
};

function UserMenu() {
  const { role } = user;
  return (
    <StyledMenu>
      <Menu>
        {(role === `${LANG.super}` && (
        <Menu.Item key={LANG.dashboard}>
          {LANG.dashboard}
        </Menu.Item>
        ))}
        { role === `${LANG.user}`
          ? <Menu.Item key={LANG.profile}>{LANG.profile}</Menu.Item>
          : <Menu.Item key={LANG.users}>{LANG.users}</Menu.Item>}
        <Menu.Item key={LANG.logout}>{LANG.logout}</Menu.Item>
      </Menu>
      <StyledWraper>
        <h1> Тут будет полезный контент </h1>
      </StyledWraper>
    </StyledMenu>
  );
}
export default UserMenu;
