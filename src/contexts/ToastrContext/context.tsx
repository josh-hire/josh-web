import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface Toastr {
  message: string;
  color: 'info' | 'success' | 'warning' | 'error';
  isOpen: boolean;
}

interface ToastrContextType {
  toastr: Toastr;
  setToastr: React.Dispatch<React.SetStateAction<Toastr>>;
}

export const ToastrContext = createContext<ToastrContextType | undefined>(undefined);

export const defaultValue: Toastr = {
  message: '',
  color: 'info',
  isOpen: false,
};

interface ToastrContextProviderProps {
  children: ReactNode;
}

export default function ToastrContextProvider({ children }: ToastrContextProviderProps) {
  const [toastr, setToastr] = useState<Toastr>(defaultValue);

  const initialValue: ToastrContextType = {
    toastr,
    setToastr,
  };

  useEffect(() => {
    if (toastr.isOpen) {
      const timer = setTimeout(() => {
        setToastr(defaultValue);
      }, 5000);
      
return () => clearTimeout(timer);
    }
  }, [toastr]);

  return <ToastrContext.Provider value={initialValue}>{children}</ToastrContext.Provider>;
}