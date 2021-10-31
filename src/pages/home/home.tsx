import React, { FC } from 'react';
import UserMenu from 'components/userMenu/userMenu';
import { StyledMain, Message } from './styles';

const HomePage: FC = () => (
  <StyledMain>
    <Message>Hello, holiday App & MainPage!</Message>
    <UserMenu />
  </StyledMain>
);

export default HomePage;
