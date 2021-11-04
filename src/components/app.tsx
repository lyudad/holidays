import { NotFoundPage, HomePage } from 'pages';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import DashTable from './AdminDashboard/index';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="dash" render={() => <DashTable />} />
      {/* <Route path="login" exact render={() => <LoginPage />} /> */}
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="*" render={() => <NotFoundPage />} />
    </Switch>
  </>
);

export default App;
