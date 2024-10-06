import React, { useContext } from "react";
import { Navigate,} from "react-router-dom";
import { AuthContext } from "../../../AuthContext";

const PrivateRoutes = ({ children }) => {
  const {auth} = useContext(AuthContext);
  // console.log(auth)
  return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
