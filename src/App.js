import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { css } from "@emotion/core";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ClipSpinner, ProtectedRoute } from './components'
import { loadUser } from './redux/actions/authAction'
//LAZY LOAD
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout'))
const UserLayout = React.lazy(() => import('./layouts/UserLayout'))


const override = css`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); 
  margin: auto auto;
`;


const App = ({
  isAuth,
  loadUser
}) => {
  useEffect((
  ) => {
    loadUser()
  }, [loadUser, isAuth])
  return (
    <Router>
      <Suspense fallback={<ClipSpinner size={50} css={override} />}>
        <Switch>
          <Redirect from='/' exact to='/auth' />
          <Route path='/auth' render={() => <AuthLayout />} />
          <Route path='/user' exact render={() => <UserLayout />} />
          <ProtectedRoute path='/user' exact component={UserLayout} isAuth={isAuth} />
        </Switch>
      </Suspense>
    </Router>
  );
}


export default connect(
  state => ({ isAuth: state.auth.isAuth }),
  { loadUser }
)(App);
