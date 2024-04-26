import { useState } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState<string>('');
  const isToken = localStorage.getItem('access_token');
  if (isToken !== null) setToken(isToken);
  return [token];
};
