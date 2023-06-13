import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // const auth = useAuth();
  const auth = true
  return auth ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute
