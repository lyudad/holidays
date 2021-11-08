import { NotFoundPage, HomePage, Calendar } from 'pages';
import UsersPage from 'pages/users';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="/users" exact render={() => <UsersPage />} />
      <Route path="/calendar" component={Calendar}> </Route>
      {/* <Route path="login" exact render={() => <LoginPage />} /> */}
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="*" render={() => <NotFoundPage />} />
    </Switch>
  </>
);

export default App;
