import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppContext } from "../lib/contextLib";

export default function AuthenticatedRoute() {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${pathname}${search}`} />;
  }

  return <Outlet />;
}
