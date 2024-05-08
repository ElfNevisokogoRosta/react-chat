import { useState } from 'react';

interface UseAuth {
  isAuth: boolean;
  login: (data: string) => void;
  logOut: () => void;
}

const useAuth = (): UseAuth => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  const login = (data: string) => {
    console.log(data, 'from hook');
    setIsAuth(true);
  };

  const logOut = () => {
    setIsAuth(false);
  };
  return { isAuth, login, logOut };
};
export { useAuth };
