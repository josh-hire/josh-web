import React from 'react';
import { ToastrContextProvider } from './ToastrContext';
import { AuthContextProvider } from './AuthContext';
import { MantineContextProvider } from './MantineContext';
import { ReactQueryContextProvider } from './ReactQueryContext';


export default function ContextProvider({ children }) {
  return (
    <ReactQueryContextProvider>
      <MantineContextProvider>
        <AuthContextProvider>
          <ToastrContextProvider>
            {children}
          </ToastrContextProvider>
        </AuthContextProvider>
      </MantineContextProvider>
    </ReactQueryContextProvider>
  );
}