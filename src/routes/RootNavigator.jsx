import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import PortfolioPage from '../pages/PortfolioPage';
import LoginPage from '../pages/LoginPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';
import AppBar from '../components/AppBar'
import ResponsiveAppBar from '../components/AppBar';
import PrivateRoute from './PrivateRoute';
import RandomRoute from './RandomRoute';



function RootNavigator() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>        
        <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>                    
        <Route path="/account" element={
            <PrivateRoute>
                <AccountPage />
            </PrivateRoute>
        }/>        
        <Route path="/portfolio" element={
            <PrivateRoute>
                <PortfolioPage />
            </PrivateRoute>
        }/>        
        <Route path="/unauthorized" element={<UnauthorizedPage />}/>        
        <Route path="*" element={
            <RandomRoute>
                <HomePage />
            </RandomRoute>
        }/>
      </Routes>
    </Router>
  );
}

export default RootNavigator;
