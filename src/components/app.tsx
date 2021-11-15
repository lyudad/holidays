import { NotFoundPage, HomePage, AdminDash } from 'pages';
import ProfilePage from 'pages/userpage/ProfilePage';
import UsersPage from 'pages/users';
import LoginPage from 'pages/loginPage';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/users/dash" component={AdminDash} />
      <Route path="login" exact component={LoginPage} />
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="/userpage" exact component={ProfilePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
