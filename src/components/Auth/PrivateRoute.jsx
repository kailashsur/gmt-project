import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Loader from '../ui/loader';

const PrivateRoute = ({ component: Component }) => {
  const { user, loading, error} = useAuth();
  const location = useLocation();
  // console.log(user);
  // console.log(loading);
  // console.log(error);

  if(loading){
    return <Loader />
}

  if (!user?.accessToken) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Component />;
};

export default PrivateRoute;
