import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { css } from "@emotion/core";

import { eyeSvg, emailSvg, keySvg, eyeSvgShow } from '../../../../constants'
import { MyNavLink, ClipSpinner } from '../../../../components'
import FormGroup from '../components/FormGroup';

import { loginUser } from '../../../../redux/actions/authAction';

const override = css`

`


const LoginPage = ({ isLoading, loginUser }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShow, setIsShow] = useState(false)
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        const user = { email, password }
        //attempt to login user
        loginUser(user)
    }

    const handleShow = () => { setIsShow(!isShow) }
    return (
        <div className="login">
            <div className="login-header">login your account</div>
            <form className="login-body" onSubmit={handleOnSubmit}>
                <FormGroup
                    id="email"
                    type="email"
                    frontSvg={emailSvg}
                    label="email"
                    labelName="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <FormGroup
                    id="password"
                    type={isShow ? "text" : "password"}
                    frontSvg={keySvg}
                    rearSvg={eyeSvg}
                    rearSvgShow={eyeSvgShow}
                    handleShow={handleShow}
                    label="password"
                    labelName="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className="form-group login-body-btn-group">
                    <MyNavLink toPath="/auth/register" lable="Register" />
                    <button type="submit" className="btn nav-link nav-link-btn">
                        {isLoading ? <ClipSpinner size={15} /> : "Login"}

                    </button>
                </div>
                <div className="form-group login-body-checkbox">
                    <label >
                        <input type="checkbox" />
                        <span>Remember password</span>
                    </label>
                </div>
            </form>
        </div>
    );
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
}

export default connect(
    state => ({ isLoading: state.auth.isLoading }),
    { loginUser }
)(LoginPage);
