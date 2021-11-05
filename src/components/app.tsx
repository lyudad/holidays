/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { NotFoundPage, HomePage, Calendar } from 'pages';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      {/* <Route path="login" exact render={() => <LoginPage />} /> */}
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="/calendar" render={() => <Calendar />}> </Route>
      <Route path="*" render={() => <NotFoundPage />} />
    </Switch>
  </>
);

export default App;
