import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children }) => {        

    let token;

    token = useSelector((state) => state.auth.token) || localStorage.getItem('token')
    
    console.log("Token: ", token)

    if (!token) {
      // user is not authenticated
        return <Navigate to="/unauthorized"/>;
    }
    return children;
  };

export default PrivateRoute