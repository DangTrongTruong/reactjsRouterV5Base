import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  return (
    <Route
    {...rest}
    render={(props) =>
      // Cookies.get('token')
      true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: location.pathname === '/undefined' ? '/login' : '/404',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
};
