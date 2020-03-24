import React,{Fragment} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLoggedIn} from '../services/auth'

    
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      { ...rest }
      render={ props =>
        isLoggedIn() ? (
          <Component { ...props } />
        ) : (
          <Redirect
            to={ {
              pathname: '/',
            } }
          />
        )
      }
    />
  ) 
    export default PrivateRoute


// import React, { Component } from "react"
// import { Redirect } from "react-router-dom"
// import { isLoggedIn } from "../services/auth"

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   if (!isLoggedIn() && window.location.pathname !== `/login`) {
    
//     window.location.replace('/login')
//     return null
//   }
//   return <Component {...rest} />
// }
// export default PrivateRoute