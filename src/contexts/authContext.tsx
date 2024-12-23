import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { User } from '../pages/Unauthenticated/types.ts';
import axiosInstance from '../apis/axiosInstance.ts';
import { useAxiosInterceptor } from '../hooks/useAxiosInterceptor.ts';

interface AuthContextType {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setAccessToken: (accessToken: string) => void;
  setAuth: (accessToken: string, user: User) => void;
  clearAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!accessToken;

  const setAuth = (accessToken: string, user: User) => {
    setAccessToken(accessToken);
    setUser(user);
  };

  const clearAuth = () => {
    setAccessToken(null);
    setUser(null);
  };

  useEffect(() => {
    if (accessToken) {
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    } else {
      delete axiosInstance.defaults.headers['Authorization'];
    }
  }, [accessToken]);

  useAxiosInterceptor();

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isAuthenticated,
        setAccessToken,
        setAuth,
        clearAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
