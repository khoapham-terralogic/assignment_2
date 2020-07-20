import React from 'react';
import UserPage from '../features/auth-feature/main/pages/UserPage';

const UserLayout = () => {

    return (
        <div className="user-container">
            <div className="row user-container-header">
                <div className="col-xs-12 user-container-header-wrapper">
                    <div className="user-container-header-title">
                        My Profile
                    </div>
                    <div className="user-container-header-description">
                        Manage your profile and contact information.
                    </div>
                </div>
            </div>
            <UserPage />
        </div>
    );
}

export default UserLayout;
