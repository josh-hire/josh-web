import React, { createContext, ReactNode, useState } from 'react';
import { USER_DATA_STORAGE } from '../../configs';
import usePersistedState from '../../hooks/usePersistedState';

interface AuthContextType {
  auth: string;
  setAuth: (value: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [value, setValue] = usePersistedState(USER_DATA_STORAGE, '');

  const initialValue: AuthContextType = {
    auth: value,
    setAuth: setValue,
  };

  return <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>;
}