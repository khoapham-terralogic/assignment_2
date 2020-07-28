import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { ClipSpinner } from '../../../../components'

import { loginUser } from '../../../../redux/actions/authAction';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ isLoading, loginUser, isAuth }) => {
    const history = useHistory()

    useEffect(() => {
        if (isAuth) history.push("/user")
    })
    return (
        <div className="login">
            {isLoading ? <div className="loadingBackground"><ClipSpinner color="#fff" /></div> : null}
            <div className="login-header">login your account</div>
            <LoginForm loginUser={loginUser} isLoading={isLoading} />
        </div>
    );
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
}

export default connect(
    state => ({
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading
    }),
    { loginUser }
)(LoginPage);
