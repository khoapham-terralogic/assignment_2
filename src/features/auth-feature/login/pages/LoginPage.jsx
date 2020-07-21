import React, { useState } from 'react';
import { eyeSvg, emailSvg, keySvg, eyeSvgShow } from '../../../../constants'
import { MyNavLink } from '../../../../components'
import FormGroup from '../components/FormGroup';


const LoginPage = () => {
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
        console.log({ email, password })
    }



    // useEffect(() => {
    //     console.log(emailRef, passwordRef);
    //     if (emailRef.current.focus()) {

    //     }
    //     if (passwordRef.current.focus()) {

    //     }
    // }, [email, password])
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
                    isShow={isShow}
                    type={isShow ? "text" : "password"}
                    frontSvg={keySvg}
                    rearSvg={isShow ? eyeSvgShow : eyeSvg}
                    handleShow={handleShow}
                    label="password"
                    labelName="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className="form-group login-body-btn-group">
                    <MyNavLink toPath="/auth/register" lable="Register" />
                    <button className="btn nav-link nav-link-btn">Login</button>
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

export default LoginPage;
