import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import useLocalStorage, {
  StorageValue,
} from '../utils/hooks/useLocalStorage.tsx';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '../query/queries/getUser.ts';
import UserData from '../utils/types/UserData.ts';

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  token: StorageValue;
  isUser: UserData | undefined;
  login: (token: string, refreshToken: string) => void;
  logOut: () => void;
}

const defaultValue: AuthContextType = {
  token: null,
  isUser: undefined,
  login: () => {},
  logOut: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultValue);

const AuthProvider: FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<UserData>();
  const [token, setToken] = useState<StorageValue>(null);

  //TODO refactor all queries
  const { data } = useGetUser();
  const navigate = useNavigate();
  const { getItem, removeItem, setItem } = useLocalStorage();
  useEffect(() => {
    const isToken = getItem('token');

    if (isToken === null) {
      setToken(null);
      setUser(undefined);
      navigate('/');
    } else {
      setToken(isToken);
      setUser(data);
      navigate('/dashboard');
    }
  }, [data]);
  const login = (token: string, refreshToken: string) => {
    setToken(token);
    setItem('token', token);
    setItem('refreshToken', refreshToken);
    navigate('/dashboard');
  };
  const logOut = () => {
    setToken(null);
    removeItem('token');
    navigate('/');
  };
  const value = {
    token,
    isUser: user || undefined,
    login,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
