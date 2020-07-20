import React, { Suspense } from 'react';
import { css } from "@emotion/core";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ClipSpinner } from './components'
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

const App = () => {
  return (
    <Router>
      <Suspense fallback={<ClipSpinner css={override} />}>
        <Switch>
          <Redirect from='/' exact to='/auth' />
          <Route path='/auth' render={() => <AuthLayout />} />
          <Route path='/user' exact render={() => <UserLayout />} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
