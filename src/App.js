import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Browse, SignIn, SignUp} from './pages';
import * as ROUTES from './constants/routes';
import {IsUserRedirect, ProtectedRoute} from './helper/routes'
import {UseAuthListener} from './hooks'


function app() {
  const {user} = UseAuthListener()
  console.log(user)

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn/>
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp/>
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse/>
        </ProtectedRoute>

        <ProtectedRoute user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home/>
        </ProtectedRoute>

      </Switch>
    </Router>
  );
}

export default app;
