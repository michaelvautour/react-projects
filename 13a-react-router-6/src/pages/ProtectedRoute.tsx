import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }: any) => {
  if (!user) {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
