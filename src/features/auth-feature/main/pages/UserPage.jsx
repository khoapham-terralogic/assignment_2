import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { ClipSpinner } from '../../../../components';
import { editSvg, avatar } from '../../../../constants'
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
    const callBack = (data) => { setIsOpen(data) }
    useEffect(() => {
        if (!isAuth) {
            history.push("/auth/login")
        }
    }, [history, isAuth])
    const local_user = JSON.parse(localStorage.getItem("user"))
    if (local_user)
        return (
            <div className="user__container__body">
                {userLoading ? <div className="loadingBackground"><ClipSpinner color="#fff" /></div> : null}
                {/* {user &&
                    <>
                        <CustomModal modalCallback={callBack} uploadImage={uploadImage} isLoading={userLoading} isOpen={isOpen} toggle={toggle} />
                        <div className="row row--single row--header">
                            <div className="col-xs-12 col-md-6 user__container__body__header">
                                <div className="user__container__body__header-img-container">
                                    <img className="user__container__body__header-img" src={`http://api.terralogic.ngrok.io/${user.avatar}`} alt="avatar" />
                                    <img onClick={toggle} className="user__container__body__header-subimg" src={editSvg} alt="edit" />
                                </div>
                                <div className="user__container__body__header-name">{local_user.displayName}</div>
                            </div>
                        </div>
                    </>} */}
                {local_user &&
                    <>
                        <CustomModal
                            modalCallback={callBack}
                            uploadImage={uploadImage}
                            isLoading={userLoading}
                            isOpen={isOpen}
                            toggle={toggle} />
                        <div className="row row--single row--header">
                            <div className="col-xs-12 col-md-6 user__container__body__header">
                                <div className="user__container__body__header-img-container">
                                    <img
                                        className="user__container__body__header-img"
                                        src={local_user.avatar ? `http://api.terralogic.ngrok.io/${local_user.avatar}` : avatar} alt="avatar" />
                                    <img
                                        onClick={toggle}
                                        className="user__container__body__header-subimg"
                                        src={editSvg}
                                        alt="edit" />
                                </div>
                                <div className="user__container__body__header-name">{local_user.displayName}</div>
                            </div>
                        </div>
                    </>}
                {local_user && <UserForm avatar={avatarLink} updateProfile={updateProfile} user={local_user} />}
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
