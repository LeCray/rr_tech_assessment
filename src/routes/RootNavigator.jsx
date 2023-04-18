import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import LoginPage from '../pages/LoginPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';
import AppBar from '../components/AppBar'
import ResponsiveAppBar from '../components/AppBar';
import PrivateRoute from './PrivateRoute';



function RootNavigator() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>        
        <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
            <PrivateRoute>
                <HomePage />
            </PrivateRoute>
        }/>
        <Route path="/account" element={
            <PrivateRoute>
                <AccountPage />
            </PrivateRoute>
        }/>        
        <Route path="*" element={
            <PrivateRoute>
                <HomePage />
            </PrivateRoute>
        }/>
      </Routes>
    </Router>
  );
}

export default RootNavigator;
