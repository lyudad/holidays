import React, { FC } from 'react';
import ProfilPage from 'components/ProfilePage';
// import TableTest from 'components/Table/TableTest';
import { StyledMain, Message } from './styles';

const HomePage: FC = () => (
  <StyledMain>
    <Message>Hello, holiday App & MainPage!</Message>
    <ProfilPage />
  </StyledMain>
);

export default HomePage;
