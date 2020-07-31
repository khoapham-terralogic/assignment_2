import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ClipSpinner } from '../../../../components'
import LoginForm from '../components/LoginForm'

const LoginPageInner = ({ isLoading, loginUser, isAuth }) => {
    const history = useHistory()

    useEffect(() => {
        if (isAuth) history.push("/user")
    })
    return (
        <div className="login">
            {isLoading ? <div className="loadingBackground"><ClipSpinner size={45} color="#fff" /></div> : null}
            <div className="login-header">login your account</div>
            <LoginForm loginUser={loginUser} isLoading={isLoading} />
        </div>
    );
}

LoginPageInner.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired,
    loginUser: PropTypes.func.isRequired,
}

export default LoginPageInner
