import React, { useEffect } from 'react';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { ClipSpinner } from '../../../../components';
import { connect } from 'react-redux';
import { registerUser } from '../../../../redux/actions/authAction'

const RegisterPage = ({
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

RegisterPage.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    registerUser: PropTypes.func.isRequired,
    msg: PropTypes.string,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    msg: state.auth.msg
})

export default connect(
    mapStateToProps,
    { registerUser }
)(RegisterPage);
