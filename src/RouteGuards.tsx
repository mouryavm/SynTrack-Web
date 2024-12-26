// src/RouteGuards.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import AuthContext for authentication state

// ProtectedRoute: Only accessible when logged in
export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <>{children}</> : <Navigate to="/" replace />;
};

// PublicRoute: Only accessible when logged out
export const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? <>{children}</> : <Navigate to="/home" replace />;
};
