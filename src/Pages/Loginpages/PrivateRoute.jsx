import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, Outlet } from 'react-router-dom';
import authState  from '../../store/authAtom';

const PrivateRoute = () => {
  const { isLoggedIn} = useRecoilValue(authState);

  if (!isLoggedIn) return <Navigate to="/signin" replace />;

  return <Outlet/> ;
};

export default PrivateRoute;
