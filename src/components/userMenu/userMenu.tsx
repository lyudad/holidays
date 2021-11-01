import React from 'react';
import { Menu } from 'antd';
import Maine, { StyledWraper } from './styles';

import { IUser } from '../../utils/types';

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
const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'admin',
};

function UserMenu() {
  const { role } = user;
  return (
    <Maine>
      <Menu>
        { (role === 'super') && <Menu.Item key="Dashboard"> Dashboard </Menu.Item> }
        { role === 'employee'
          ? <Menu.Item key="Profile">Profile</Menu.Item>
          : <Menu.Item key="Users">Users</Menu.Item>}
        <Menu.Item key="Logout">Logout</Menu.Item>
      </Menu>
      <StyledWraper>
        <h1> Тут будет полезный контент </h1>
      </StyledWraper>
    </Maine>
  );
}
export default UserMenu;
