import { NotFoundPage, HomePage } from 'pages';
import UsersPage from 'pages/users';
import LoginPage from 'pages/loginPage';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="/users" exact render={() => <UsersPage />} />
      <Route path="/login" exact render={() => <LoginPage />} />
      {/* <Route path="/login" exact component={<LoginPage />} /> */}
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="*" render={() => <NotFoundPage />} />
    </Switch>
  </>
);

export default App;
