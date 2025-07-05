import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { verifyUser } from '../Api/auth';
import authState from './authAtom';

const AuthProvider = ({ children }) => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const checkAuth = async () => {
      const { success } = await verifyUser();
      if (success) {
        setAuth({ isLoggedIn: true });
      } else {
        setAuth({ isLoggedIn: false });
      }
    };

    checkAuth();
  });

  return children;
};

export default AuthProvider;
