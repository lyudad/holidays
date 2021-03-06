import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from 'utils/hooks';

const ProtectedRoute: FC<RouteProps> = ({ path, children, ...rest }) => {
  const { loggedIn } = useAppSelector((state) => state.user);
  return (
    <Route
      path={path}
      {...rest}
      render={({ location }) => (loggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};

export default ProtectedRoute;
