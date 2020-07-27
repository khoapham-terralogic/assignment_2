import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import UserFormGroup from '../components/UserInput';
import { MyNavLink } from '../../../../components';
import { eyeSvg, eyeSvgShow, editSvg } from '../../../../constants'
import { logoutUser } from '../../../../redux/actions/authAction';
import { updateProfile, uploadImage } from '../../../../redux/actions/userAction'
import CustomModal from '../../../uploadImage/CustomModal';
import UserForm from '../components/UserForm';


const UserPage = ({
    isAuth,
    isLoading,
    user,
    logoutUser,
    updateProfile,
    userLoading,
    uploadImage,
    avatarLink
}) => {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
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
    useEffect(() => {
        if (!isAuth) {
            history.push("/auth/login")
        }
    }, [history, isAuth])
    if (user)
        return (
            <div className="user__container__body">
                {user &&
                    <>
                        <CustomModal uploadImage={uploadImage} isLoading={userLoading} isOpen={isOpen} toggle={toggle} />
                        <div className="row row--single row--header">
                            <div className="col-xs-12 col-md-6 user__container__body__header">
                                <div className="user__container__body__header-img-container">
                                    <img className="user__container__body__header-img" src={`http://api.terralogic.ngrok.io/${user.avatar}`} alt="avatar" />
                                    <img onClick={toggle} className="user__container__body__header-subimg" src={editSvg} alt="edit" />
                                </div>
                                <div className="user__container__body__header-name">{user.name}</div>
                            </div>
                        </div>
                    </>}
                {/* {user &&
                    <form>
                        <div className="row">
                            <div className="user__container__body-main col-xs-12 col-md-6">
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
                            <div className="user__container__body-main col-xs-12 col-md-6">
                                <UserFormGroup
                                    id="email"
                                    type="email"
                                    value={user.email}
                                    // onChange={handleEmailChange}
                                    placeholder="Email"
                                // readonly="true"

                                />
                            </div>
                            <div className="user__container__body-main col-xs-12 col-md-6">
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

                        <div className="col-xs-12 user__container__body-main-line"></div>
                        <div className="row">
                            <div className="user__container__body-main-description col-xs-12 col-md-6">
                                Change password
                </div>
                        </div>
                        <div className="row">
                            <div className="user__container__body-main col-xs-12 col-md-6">
                                <UserFormGroup
                                    id="currPassword"
                                    type="password"
                                    rearSvg={eyeSvg}
                                    rearSvgShow={eyeSvgShow}
                                    value={currPassword}
                                    onChange={handleCurrPasswordChange}
                                    placeholder="Current password"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="user__container__body-main col-xs-12 col-md-6">
                                <UserFormGroup
                                    id="newPassword"
                                    type="password"
                                    rearSvg={eyeSvg}
                                    rearSvgShow={eyeSvgShow}
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                    placeholder="New password"
                                />
                            </div>
                            <div className="user__container__body-main col-xs-12 col-md-6">
                                <UserFormGroup
                                    id="conPassword"
                                    type="password"
                                    rearSvg={eyeSvg}
                                    rearSvgShow={eyeSvgShow}
                                    value={conPassword}
                                    onChange={handleConPasswordChange}
                                    placeholder="Confirm password"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6 login-body-btn-group">
                                <button className="btn nav-link nav-link-btn">Save</button>
                                <MyNavLink onClick={logoutUser} toPath="#" lable="Log out" />
                            </div>
                        </div>
                    </form>} */}
                {user && <UserForm avatar={avatarLink} updateProfile={updateProfile} user={user} />}
            </div>
        );
}

UserPage.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    userLoading: PropTypes.bool.isRequired,
    uploadImage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    user: state.auth.user,
    userLoading: state.user.isLoading,
    avatarLink: state.user.data
})

export default connect(
    mapStateToProps,
    { logoutUser, updateProfile, uploadImage }
)(UserPage);
