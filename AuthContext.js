import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children, isLoggedIn: isLoggedInProp }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);

  const userLogIn = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };
  const userLogOut = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, userLogIn, userLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};
export const useLogIn = () => {
  const { userLogIn } = useContext(AuthContext);
  return userLogIn;
};

export const useLogOut = () => {
  const { userLogOut } = useContext(AuthContext);
  return userLogOut;
};
