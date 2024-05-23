import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from '../../context/AuthContext.tsx';

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const { token } = useAuth();
  if (token) {
    return <>{children}</>;
  }

  return <Navigate to="/auth/login" />;
}

export default RequireAuth;
