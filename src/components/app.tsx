import { NotFoundPage, HomePage } from 'pages';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import Dash from './AdminDashboard/index';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="*" render={() => <Dash />} />
      {/* <Route path="login" exact render={() => <LoginPage />} /> */}
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="*" render={() => <NotFoundPage />} />
    </Switch>
  </>
);

export default App;
