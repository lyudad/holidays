import
{
  NotFoundPage,
  HomePage,
  Calendar,
  AdminDash,
} from 'pages';
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
      <Route path="/userpage" component={ProfilePage} />
      <Route path="/users/calendar" component={Calendar} />
      <Route path="/users/dash" component={AdminDash} />
      <Route path="login" component={LoginPage} />
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="*" exact component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
