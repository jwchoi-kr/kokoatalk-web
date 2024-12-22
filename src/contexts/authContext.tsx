import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const isAuthenticated = !!accessToken;

  const signIn = () => {
    setAccessToken(accessToken);
  };

  const signOut = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, isAuthenticated, signIn, signOut }}
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
