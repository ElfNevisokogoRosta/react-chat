import { useAuth } from './useAuth.tsx';
import { Navigate } from 'react-router-dom';

import { ReactNode } from 'react';

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const [token] = useAuth();
  return token ? children : <Navigate to="/auth/login" />;
}

export default RequireAuth;
