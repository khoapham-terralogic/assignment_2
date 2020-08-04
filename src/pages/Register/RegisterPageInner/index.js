import React, { useEffect } from 'react';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { ClipSpinner } from '../../../components';

const RegisterPageInner = ({
    registerUser,
    isLoading,
    isAuth,
    msg
}) => {
    const history = useHistory()
    useEffect(() => {
        if (isAuth) history.push("/user")
    }, [msg, isAuth, history])
    return (
        <div className="login">
            {isLoading ? <div className="loadingBackground"><ClipSpinner size={40} color="#fff" /></div> : null}
            <div className="login-header">register your account</div>
            <RegisterForm registerUser={registerUser} />
        </div>
    );
}

RegisterPageInner.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    registerUser: PropTypes.func.isRequired,
    msg: PropTypes.string,
}


export default RegisterPageInner
