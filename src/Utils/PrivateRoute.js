import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { getToken } from "./Common";

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          getToken() ? (
            <Component {...props} />
          ) : (
            <Navigate to="/login" state={{ from: props.location }} />
          )
        }
      />
    </Routes>
  );
}

export default PrivateRoute;
