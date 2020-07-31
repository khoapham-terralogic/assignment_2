import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { css } from "@emotion/core";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ClipSpinner, ProtectedRoute } from './components'
import { loadUser } from './redux/actions/authAction'
import { clearError } from './redux/actions/errorAction'
import 'react-toastify/dist/ReactToastify.css';
//LAZY LOAD
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout'))
const UserLayout = React.lazy(() => import('./layouts/UserLayout'))
const NotFoundLayout = React.lazy(() => import('./layouts/NotFoundLayout'))


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
  loadUser,
  error,
  clearError
}) => {
  useEffect((
  ) => {
    loadUser()
    clearError()
  }, [loadUser, isAuth, error, clearError])
  return (
    <Router>
      <Suspense fallback={<ClipSpinner color="#000" size={50} css={override} />}>
        <Switch>
          <Redirect from='/' exact to='/auth' />
          <Route path='/auth' render={() => <AuthLayout />} />
          {/* <Route path='/user' exact render={() => <UserLayout />} /> */}
          <ProtectedRoute path='/user' exact component={UserLayout} isAuth={isAuth} />
          <Route render={() => <NotFoundLayout />} />
        </Switch>
        <ToastContainer
          className="custom-toast"
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      </Suspense>
    </Router>
  );
}


export default connect(
  state => ({ isAuth: state.auth.isAuth }),
  { loadUser, clearError }
)(App);
