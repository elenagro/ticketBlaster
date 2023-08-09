import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isLoggedOut: false,
  setIsLoggedOut: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isLoggedOut, setIsLoggedOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
