import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { loginUser } from '../../../../redux/actions/authAction';
import LoginPageInner from './LoginPageInner';

const LoginPage = ({ isLoading, loginUser, isAuth }) => {
    return (
        <LoginPageInner isAuth={isAuth} isLoading={isLoading} loginUser={loginUser} />
    );
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired
}

export default connect(
    state => ({
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading
    }),
    { loginUser }
)(LoginPage);
