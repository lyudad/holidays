import React from 'react';
import { Menu } from 'antd';
import { StyledContainer, StyledMenu } from 'components/userMenu/styles';
import LANG from 'language/en';
import { employee } from 'components/userMenu/constants';
import { useAppSelector, useAppDispatch } from 'utils/hooks';
import { Link } from 'react-router-dom';
import { signOut } from 'services/reducers/user/userSlice';

function UserMenu() {
  const dispatch = useAppDispatch();
  const role:string = useAppSelector((state) => state.data.user.userData.role);

  const onClick = () => {
    dispatch(signOut());
    localStorage.removeItem('user');
  };
  return (
    <StyledContainer>
      <StyledMenu>
        {(!role) && <Link to="/">{LANG.singIn}</Link>}
        {(role === employee) ? (
          <>
            <Menu.Item key={LANG.profile}>
              <Link to="/userpage">{LANG.profile}</Link>
            </Menu.Item>
          </>
        ) : null }
        {role !== employee ? (
          <>
            <Menu.Item key={LANG.dashboard}>
              <Link to="/users/dash">{LANG.dashboard}</Link>
            </Menu.Item>
            <Menu.Item key={LANG.users}>
              <Link to="/users">{LANG.users}</Link>
            </Menu.Item>
          </>
        ) : null }
        <Menu.Item key={LANG.logout} onClick={onClick}>
          <Link to="/">{LANG.logout}</Link>
        </Menu.Item>
      </StyledMenu>
    </StyledContainer>
  );
}
export default UserMenu;
