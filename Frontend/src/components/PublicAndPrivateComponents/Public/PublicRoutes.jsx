import React, { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
 
  const {auth} = useContext(AuthContext);
  return !auth.isAuthenticated ? children : <Navigate to="/userprofile"/>
};

export default PublicRoutes;
