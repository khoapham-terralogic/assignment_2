import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import LoginPage from '../features/auth-feature/login/pages/LoginPage'
import RegisterPage from '../features/auth-feature/register/pages/RegisterPage';

import { Logo } from '../components'
import { rightImage } from '../constants'

const AuthLayout = () => {
    const match = useRouteMatch();
    return (
        <section className="auth">
            <div className="auth__container">
                <div className="auth__container__left">
                    <Logo />
                    <Switch>
                        <Redirect from="/auth" exact to="/auth/login" />
                        <Route path={`${match.url}/login`} exact render={() => <LoginPage />} />
                        <Route path={`${match.url}/register`} exact render={() => <RegisterPage />} />
                    </Switch>
                </div>
                <div className="auth__container__right">
                    <img className="auth__container__right-img" src={rightImage} alt="img" />
                </div>
            </div>
        </section>
    );
}

export default AuthLayout;
