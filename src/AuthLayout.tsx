import React from 'react';
import './styles/AuthLayout.css';
import Auth_image from '../src/assets/Auth_image_left.svg'

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-left">
      <img src={Auth_image} alt="Authentication" />
      </div>
      <div className="auth-right">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
