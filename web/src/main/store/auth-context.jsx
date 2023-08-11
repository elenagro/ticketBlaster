import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isLoggedOut: false,
  setIsLoggedOut: () => {},
  menuContent: "User Details",
  setMenuContent: () => {},
  activeMenuLink: "User Details",
  setActiveMenuLink: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [menuContent, setMenuContent] = useState("User Details");
  const [activeMenuLink, setActiveMenuLink] = useState("User Details");

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isLoggedOut,
        setIsLoggedOut,
        menuContent,
        setMenuContent,
        activeMenuLink,
        setActiveMenuLink,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
