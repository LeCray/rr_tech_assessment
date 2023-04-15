import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import LoginPage from '../pages/LoginPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';
import AppBar from '../components/AppBar'
import ResponsiveAppBar from '../components/AppBar';

function RootNavigator() {
  const { token } = useSelector((state) => state.auth);

//   const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         token ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: '/unauthorized', state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );

//   const PublicRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         token ? <Redirect to="/" /> : <Component {...props} />
//       }
//     />
//   );

  return (
    <Router>
        <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />        
        <Route path="*" element={<UnauthorizedPage />} />
      </Routes>
    </Router>
  );
}

export default RootNavigator;
