import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const RandomRoute = ({ children }) => {        

    const navigate = useNavigate();

    let token;

    token = useSelector((state) => state.auth.token) || localStorage.getItem('token')
        
    if (!token) {
      // user is not authenticated
        return <Navigate to="/"/>;
    } else {
        navigate("/Home", { replace: true })
        return children;
    }
    
};

export default RandomRoute