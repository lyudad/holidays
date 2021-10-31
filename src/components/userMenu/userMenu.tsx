import React from 'react';
import { Menu } from 'antd';
// import { IUser } from '../../utils/types';

// interface Props {
//   id: string,
// }

// по id в базе будет поиск пользователя и его роли, для рендора соответствующих кнопок меню
// const user: IUser = UserModel.findOne(id);
// const { role } = user;
// по роли добавить рендер разделов меню: Dashboard - только для super,
// Profile - employee, User - super+ admin
// добавить обработчик на клик по кнопке, который будет переводить на соответствующие страницы ;

const UserMenu = () => (

  <Menu style={{ width: 256 }}>
    <Menu.Item key="Dashboard">Dashboard</Menu.Item>
    <Menu.Item key="Profile">Profile</Menu.Item>
    <Menu.Item key="User">Users</Menu.Item>
    <Menu.Item key="Logout">Logout</Menu.Item>
  </Menu>
);
export default UserMenu;
