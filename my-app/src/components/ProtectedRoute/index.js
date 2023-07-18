import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ path, element: Element }) => {
  const jwtToken = Cookies.get('jwt_token');
  const isAuthenticated = jwtToken !== undefined;

  return isAuthenticated ? (
    <Route path={path} element={<Element />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
