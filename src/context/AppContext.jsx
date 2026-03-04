/**
 * Global App Context
 * Use this for state that needs to be shared across many components
 * Example: User session, theme, quiz progress
 */

import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userSession, setUserSession] = useState(null);
  const [theme, setTheme] = useState('light');

  const value = {
    userSession,
    setUserSession,
    theme,
    setTheme
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
