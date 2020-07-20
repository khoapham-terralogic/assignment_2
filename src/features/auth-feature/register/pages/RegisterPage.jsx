import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { eyeSvg, emailSvg, keySvg, eyeSvgShow } from '../../../../constants'
import { MyNavLink } from '../../../../components'
import FormGroup from '../../login/components/FormGroup';

const RegisterPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isShow, setIsShow] = useState(false)

    const handleEmailChange = (e) => { setEmail(e.target.value) }
    const handlePasswordChange = (e) => { setPassword(e.target.value) }
    const handleConPasswordChange = (e) => { setConPassword(e.target.value) }
    const handleFullNameChange = (e) => { setFullName(e.target.value) }
    const handlePhoneNumberChange = (e) => { setPhoneNumber(e.target.value) }
    const goBack = () => { history.goBack() }
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log({ email, password, fullName, phoneNumber })
    }
    const handleShow = () => { setIsShow(!isShow) }

    return (
        <div className="login">
            <div className="login-header">register your account</div>
            <form className="login-body" onSubmit={handleOnSubmit}>
                <FormGroup
                    id="email"
                    type="email"
                    frontSvg={emailSvg}
                    label="email"
                    labelName="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange} />
                <FormGroup
                    id="password"
                    isShow={isShow}
                    type={isShow ? "text" : "password"}
                    handleShow={handleShow}
                    frontSvg={keySvg}
                    rearSvg={isShow ? eyeSvgShow : eyeSvg}
                    label="password"
                    labelName="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange} />
                <FormGroup
                    id="conPassword"
                    isShow={isShow}
                    type={isShow ? "text" : "password"}
                    handleShow={handleShow}
                    frontSvg={keySvg}
                    rearSvg={isShow ? eyeSvgShow : eyeSvg}
                    label="conPassword"
                    labelName="Confirm password"
                    placeholder="Enter your password"
                    value={conPassword}
                    onChange={handleConPasswordChange} />
                <FormGroup
                    id="fullName"
                    type="text"
                    frontSvg={emailSvg}
                    label="fullName"
                    labelName="Full Name"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={handleFullNameChange} />
                <FormGroup
                    id="phoneNumber"
                    type="text"
                    frontSvg={emailSvg}
                    label="phoneNumber"
                    labelName="Phone Number"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange} />
                <div className="form-group login-body-btn-group">
                    <MyNavLink onClick={goBack} toPath="/register" lable="Back" />
                    <button className="btn nav-link nav-link-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
