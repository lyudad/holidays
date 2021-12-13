import React, { FC } from 'react';
import {
  useNavigate,
} from 'react-router-dom';
import { useAppSelector } from 'utils/hooks';

export interface Props {
  title?: string
  children: React.ReactNode
}
const RequireAuth: FC<Props> = ({ children }):any => {
  const navigate = useNavigate();

  const { loggedIn } = useAppSelector((state) => state.user.loggedIn);

  const auth = loggedIn;
  // console.log(loggedIn);
  if (auth === false) {
    return navigate('/');
  }

  return children;
};

export default RequireAuth;
