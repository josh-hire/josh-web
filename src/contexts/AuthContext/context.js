import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { USER_DATA_STORAGE } from '../../configs';
import usePersistedState from '../../hooks/usePersistedState';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [value,setValue] = usePersistedState(USER_DATA_STORAGE,'');

  const initialValue = {
    auth:value,
    setAuth:setValue,
  };

  return <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};
