import { NotFoundPage, HomePage, Calendar } from 'pages';
import UsersPage from 'pages/users';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" exact component={UsersPage} />
      <Route path="/users/calendar" component={Calendar} />
      {/* <Route path="login" exact component={LoginPage} /> */}
      {/* <ProtectedRoute path="/profile" exact component={ProfileEditPage} /> */}
      <Route path="*" exact component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
