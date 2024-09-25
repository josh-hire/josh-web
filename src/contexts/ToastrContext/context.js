import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const ToastrContext = createContext();

export const defaultValue = {
  message: '',
  color: 'info',
  isOpen: false,
};

export default function ToastrContextProvider({ children }) {
  const [toastr, setToastr] = useState(defaultValue);
  const initialValue = {
    toastr,
    setToastr,
  };

  useEffect(() => {
    toastr.isOpen &&
      setTimeout(function () {
        setToastr(defaultValue);
      }, 5000);
  }, [toastr]);

  return <ToastrContext.Provider value={initialValue}>{children}</ToastrContext.Provider>;
}

ToastrContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
