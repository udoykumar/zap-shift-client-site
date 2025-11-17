import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <SyncLoader className="w-50 h-50" />
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
