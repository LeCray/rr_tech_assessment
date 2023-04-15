import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import Alert from '@mui/material/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // Call an API to authenticate the user and obtain an access token

    if (username === "darryn@randrtechsa.com" && password === "P@55w0rd@1") {
        const token = "Authenticated";
        // Dispatch a login action to update the global state with the token
        dispatch(login(token));
    } else {
        <Alert severity="error">This is an error alert — check it out!</Alert>
    }
    
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
