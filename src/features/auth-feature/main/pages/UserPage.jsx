import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import UserFormGroup from '../components/UserInput';
import { MyNavLink } from '../../../../components';
import { eyeSvg, eyeSvgShow, editSvg } from '../../../../constants'


const UserPage = ({
    isAuth,
    isLoading,
    user
}) => {
    const history = useHistory()
    // const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [currPassword, setCurrPassword] = useState("")
    // const [fullName, setFullName] = useState("")
    // const [phoneNumber, setPhoneNumber] = useState("")
    const [isShow, setIsShow] = useState(false)

    const handleShow = () => { setIsShow(!isShow) }

    // const handleEmailChange = (e) => { setEmail(e.target.value) }
    const handleNewPasswordChange = (e) => { setNewPassword(e.target.value) }
    const handleConPasswordChange = (e) => { setConPassword(e.target.value) }
    const handleCurrPasswordChange = (e) => { setCurrPassword(e.target.value) }
    // const handleFullNameChange = (e) => { setFullName(e.target.value) }
    // const handlePhoneNumberChange = (e) => { setPhoneNumber(e.target.value) }
    // useEffect(() => {
    //     if (!isAuth) {
    //         history.push("/auth/login")
    //     }
    // }, [history, isAuth])
    if (user)
        return (
            <form className="user__container-body">
                <div className="row">
                    <div className="col-xs-12 col-md-6 user__container-body-header">
                        <div className="user__container-body-header-img-container">
                            <img className="user__container-body-header-img" src={user.avatar} alt="avatar" />
                            <img onClick={() => alert("open modal")} className="user__container-body-header-subimg" src={editSvg} alt="edit" />
                        </div>
                        <div className="user__container-body-header-name">{user.name}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="user__container-body-main col-xs-12 col-md-6">
                        <UserFormGroup
                            id="fullName"
                            type="text"
                            value={user.name}
                            // onChange={handleFullNameChange}
                            placeholder="Full Name"
                        // readonly="true"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="user__container-body-main col-xs-12 col-md-6">
                        <UserFormGroup
                            id="email"
                            type="email"
                            value={user.email}
                            // onChange={handleEmailChange}
                            placeholder="Email"
                        // readonly="true"

                        />
                    </div>
                    <div className="user__container-body-main col-xs-12 col-md-6">
                        <UserFormGroup
                            id="phoneNumber"
                            type="text"
                            value={user.phone}
                            // onChange={handlePhoneNumberChange}
                            placeholder="Phone"
                        // readonly="true"
                        />
                    </div>
                </div>
                <div className="col-xs-12 user__container-body-main-line"></div>
                <div className="row">
                    <div className="user__container-body-main-description col-xs-12 col-md-6">
                        Change password
                </div>
                </div>
                <div className="row">
                    <div className="user__container-body-main col-xs-12 col-md-6">
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
                    <div className="user__container-body-main col-xs-12 col-md-6">
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
                    <div className="user__container-body-main col-xs-12 col-md-6">
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

UserPage.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    user: state.auth.user
})

export default connect(
    mapStateToProps,
    null
)(UserPage);
