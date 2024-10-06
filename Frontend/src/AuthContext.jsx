import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          console.log("token has been expired");
          logout();
        } else {
          setAuth({
            isAuthenticated: true,
            user: decoded,
            token: token,
          });
        }
      } catch (error) {
        console.log("Invalid token :", error);
        localStorage.removeItem("token");
      }
    }
  }, []);
  const login = (token) => {
    if (token) {
      try {
        const decoded = jwtDecode(token);

        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          console.log("token has been expired");
          logout();
        } else {
          localStorage.setItem("token",token)
          setAuth({
            isAuthenticated: true,
            user: decoded,
            token: token,
          });
        }
      } catch (error) {
        console.log("Invalid token :", error);
        localStorage.removeItem("token");
      }
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };
  return (
    <AuthContext.Provider value={{ auth, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

