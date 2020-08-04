import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutUser } from '../../../redux/actions/authAction';
import { updateProfile, uploadImage } from '../../../redux/actions/userAction'
import UserPageInner from '../UserPageInner';


const UserPage = ({
    isAuth,
    logoutUser,
    updateProfile,
    userLoading,
    uploadImage,
    avatarLink
}) => {
    const local_user = JSON.parse(localStorage.getItem("user"))
    if (local_user)
        return (
            <UserPageInner
                isAuth={isAuth}
                logoutUser={logoutUser}
                updateProfile={updateProfile}
                userLoading={userLoading}
                uploadImage={uploadImage}
                avatarLink={avatarLink}
                local_user={local_user}
            />
        );
}

UserPage.propTypes = {
    isAuth: PropTypes.bool.isRequired,
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
