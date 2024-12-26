import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import OTPPage from './Components/OtpPage';
import ChangePassword from './Components/ChangePassword';

import Home from './Components/AppLayout/AppLayout';
import Dashboard from './Components/SubLayout/SubLayout';


const AppRoutes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/continue-signin" element={<OTPPage/>} />
      <Route path="/change-password" element={<ChangePassword/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </RouterRoutes>
  );
};

export default AppRoutes;