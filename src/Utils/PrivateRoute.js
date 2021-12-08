import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { getToken } from './Common';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
    let location = useLocation()
    return (
        <Route 
        {...rest}
        render={(props) => getToken() ? <Component {...props} /> : <Navigate to="/login" state={{ from: location }} replace/>}
        />
    )
}

export default PrivateRoute;