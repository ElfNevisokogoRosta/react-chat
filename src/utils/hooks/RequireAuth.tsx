import { Navigate } from 'react-router-dom';

import { ReactNode } from 'react';
import { useAuth } from './useAuth.tsx';

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const { isAuth } = useAuth();
  console.log(isAuth);
  if (isAuth) {
    console.log(isAuth);
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
}

export default RequireAuth;
