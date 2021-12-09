import {
  NotFoundPage, AdminDash, LoginPage,
} from 'pages';

import ProfilePage from 'pages/userpage/ProfilePage';
import UsersPage from 'pages/users';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './protected-route';

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/users"
        element={(
          <RequireAuth>
            <UsersPage />
          </RequireAuth>
          )}
      />
      <Route
        path="/users/dash"
        element={(
          <RequireAuth>
            <AdminDash />
          </RequireAuth>
      )}
      />
      {/* <Route path="/login" component={LoginPage} /> */}
      {/* <ProtectedRoute path="/profile"  children={<ProfileEditPage />} /> */}
      <Route
        path="/userpage"
        element={(
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        )}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
