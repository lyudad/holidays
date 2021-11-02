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
       <ProtectedRoute path={routes.calendar} render={() => <Calendar />}> </ProtectedRoute>
      <Route path="*" render={() => <NotFoundPage />} />
    </Switch>
  </>
);

export default App;
