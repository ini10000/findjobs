import React from "react";
import { Navigate } from "react-router-dom";
import auth from "../utils/auth";

export default function RequireAuth({ children, redirectTo }) {
  return auth.isAuthenticated ? children : <Navigate to={redirectTo} />;
}
