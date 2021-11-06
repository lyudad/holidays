import { NotFoundPage, HomePage } from 'pages';
import ProfilePage from 'pages/userpage/ProfilePage';
import React, { FC } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
// import UserMenu from './userMenu';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      {/* <Route path="login" exact render={() => <LoginPage />} /> */}
      {/* <ProtectedRoute path="/profile" exact children={<ProfileEditPage />} /> */}
      <Route path="/userpage" exact render={() => <ProfilePage />} />
      <Route path="*" render={() => <NotFoundPage />} />
    </Switch>
  </>
);

export default App;
