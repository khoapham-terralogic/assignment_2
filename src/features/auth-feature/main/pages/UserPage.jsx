import React, { useState } from 'react';
import UserFormGroup from '../components/UserInput';
import { MyNavLink } from '../../../../components';
import { eyeSvg, eyeSvgShow } from '../../../../constants'

const UserPage = () => {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [currPassword, setCurrPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isShow, setIsShow] = useState(false)

    const handleShow = () => { setIsShow(!isShow) }

    const handleEmailChange = (e) => { setEmail(e.target.value) }
    const handleNewPasswordChange = (e) => { setNewPassword(e.target.value) }
    const handleConPasswordChange = (e) => { setConPassword(e.target.value) }
    const handleCurrPasswordChange = (e) => { setCurrPassword(e.target.value) }
    const handleFullNameChange = (e) => { setFullName(e.target.value) }
    const handlePhoneNumberChange = (e) => { setPhoneNumber(e.target.value) }
    return (
        <form className="user-container-body">
            <div className="row">
                <div className="col-xs-12 col-md-6 user-container-body-header">
                    <img className="user-container-body-header-img" src="/assets/images/download.jpg" alt="avatar" />
                    <div className="user-container-body-header-name">Minh Tran</div>
                </div>
            </div>
            <div className="row">
                <div className="user-container-body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={handleFullNameChange}
                        placeholder="Full Name"
                    />
                </div>
            </div>
            <div className="row">
                <div className="user-container-body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                    />
                </div>
                <div className="user-container-body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="phoneNumber"
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="Phone"
                    />
                </div>
            </div>
            <div className="col-xs-12 user-container-body-main-line"></div>
            <div className="row">
                <div className="user-container-body-main-description col-xs-12 col-md-6">
                    Change password
                </div>
            </div>
            <div className="row">
                <div className="user-container-body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="currPassword"
                        type={isShow ? "text" : "password"}
                        handleShow={handleShow}
                        rearSvg={isShow ? eyeSvgShow : eyeSvg}
                        value={currPassword}
                        onChange={handleCurrPasswordChange}
                        placeholder="Current password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="user-container-body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="newPassword"
                        type={isShow ? "text" : "password"}
                        handleShow={handleShow}
                        rearSvg={isShow ? eyeSvgShow : eyeSvg}
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        placeholder="New password"
                    />
                </div>
                <div className="user-container-body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="conPassword"
                        type={isShow ? "text" : "password"}
                        handleShow={handleShow}
                        rearSvg={isShow ? eyeSvgShow : eyeSvg}
                        value={conPassword}
                        onChange={handleConPasswordChange}
                        placeholder="Confirm password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 login-body-btn-group">
                    <button className="btn nav-link nav-link-btn">Save</button>
                    <MyNavLink toPath="#" lable="Log out" />
                </div>
            </div>
        </form>
    );
}

export default UserPage;
