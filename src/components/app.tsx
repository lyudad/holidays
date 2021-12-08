import {
  NotFoundPage, AdminDash, LoginPage,
} from 'pages';

import ProfilePage from 'pages/userpage/ProfilePage';
import UsersPage from 'pages/users';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/users/dash" component={AdminDash} />
      {/* <Route path="/login" component={LoginPage} /> */}
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="/userpage" exact component={ProfilePage} />
      <Route path="*" render={() => <NotFoundPage />} />
    </Switch>
  </>
);

export default App;
