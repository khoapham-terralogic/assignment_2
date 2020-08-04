import React from 'react';
import UserPage from '../pages/User/UserPageConnectWrapper';

const UserLayout = () => {

    return (
        <div className="user__container">
            <div className="row user__container__header">
                <div className="col-xs-12 user__container__header__wrapper">
                    <div className="user__container__header__title">
                        My Profile
                    </div>
                    <div className="user__container__header__description">
                        Manage your profile and contact information.
                    </div>
                </div>
            </div>
            <UserPage />
        </div>
    );
}

export default UserLayout;
