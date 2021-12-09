import React, { FC } from 'react';
import {
  Navigate, useLocation,
} from 'react-router-dom';
import { useAppSelector } from 'utils/hooks';

export interface Props {
  title?: string
  children: React.ReactNode
}
const RequireAuth: FC<Props> = ({ children }):any => {
  const location = useLocation();
  const { loggedIn } = useAppSelector((state) => state.user.loggedIn);

  const auth = loggedIn;

  if (auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
