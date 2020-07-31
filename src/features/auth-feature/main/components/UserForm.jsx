import React from 'react';
import { withFormik } from 'formik';
import { eyeSvg, eyeSvgShow } from '../../../../constants'
import { formSchema } from '../../../../helpers/schema'
import { MyNavLink } from '../../../../components';
import UserFormGroup from './UserInput';
// import { logoutUser } from '../../../../redux/actions/authAction';
// import store from '../../../../redux/store';

export const UserInnerForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        // handleBlur,
        handleSubmit,
        logout
    } = props;
    // const logout = () => {
    //     store.dispatch(logoutUser())
    // }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row row--single">
                <div className="user__container__body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="fullName"
                        type="text"
                        value={values.fullName}
                        defaultValue={values.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                    // readonly="true"
                    />
                    {touched.fullName && errors.fullName && <p className="user__container__body-main__errorMessage">{errors.fullName}</p>}
                </div>
            </div>
            <div className="row row--multi">
                <div className="user__container__body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="email"
                        type="email"
                        defaultValue={values.email}
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Email"
                    // readonly="true"

                    />
                    {touched.email && errors.email && <p className="user__container__body-main__errorMessage">{errors.email}</p>}
                </div>
                <div className="user__container__body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="phoneNumber"
                        type="text"
                        value={values.phoneNumber}
                        defaultValue={values.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone"
                    // readonly="true"
                    />
                    {touched.phoneNumber && errors.phoneNumber && <p className="user__container__body-main__errorMessage">{errors.phoneNumber}</p>}
                </div>
            </div>

            <div className="col-xs-12 user__container__body-main-line"></div>
            <div className="row">
                <div className="user__container__body-main-description col-xs-12 col-md-6">
                    Change password
                </div>
            </div>
            <div className="row row--single">
                <div className="user__container__body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="currentPassword"
                        type="password"
                        rearSvg={eyeSvg}
                        rearSvgShow={eyeSvgShow}
                        onChange={handleChange}
                        value={values.currentPassword}
                        placeholder="Current password"
                    />
                    {touched.currentPassword && errors.currentPassword && <p className="user__container__body-main__errorMessage">{errors.currentPassword}</p>}
                </div>
            </div>
            <div className="row row--multi">
                <div className="user__container__body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="newPassword"
                        type="password"
                        rearSvg={eyeSvg}
                        rearSvgShow={eyeSvgShow}
                        value={values.newPassword}
                        onChange={handleChange}
                        placeholder="New password"
                    />
                    {touched.newPassword && errors.newPassword && <p className="user__container__body-main__errorMessage">{errors.newPassword}</p>}
                </div>
                <div className="user__container__body-main col-xs-12 col-md-6">
                    <UserFormGroup
                        id="confirmPassword"
                        type="password"
                        rearSvg={eyeSvg}
                        rearSvgShow={eyeSvgShow}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                    />
                    {touched.confirmPassword && errors.confirmPassword && <p className="user__container__body-main__errorMessage">{errors.confirmPassword}</p>}
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 login-body-btn-group">
                    <button type="submit" className="btn nav-link nav-link-btn">Save</button>
                    <MyNavLink onClick={logout} toPath="#" lable="Log out" />
                </div>
            </div>
        </form>
    );
};

const UserForm = withFormik({
    // enableReinitialize: true
    mapPropsToValues: ({ fullName, email, phoneNumber, currentPassword, newPassword, confirmPassword }) => ({
        email: email || JSON.parse(localStorage.getItem("user")).email,
        fullName: fullName || JSON.parse(localStorage.getItem("user")).name,
        phoneNumber: phoneNumber || JSON.parse(localStorage.getItem("user")).phone,
        currentPassword: currentPassword || "",
        newPassword: newPassword || "",
        confirmPassword: confirmPassword || "",
    }),
    // mapPropsToValues: (values) => ({
    //     email: user.email || values.email,
    //     fullName: user.name || values.fullName,
    //     phoneNumber: user.phone || values.phoneNumber,
    //     // currentPassword: "" || values.currentPassword,
    //     // newPassword: values.newPassword || "",
    //     // confirmPassword: values.confirmPassword || "",
    // }),
    // Custom sync validation
    validationSchema: formSchema,
    handleSubmit: (values, { props }) => {
        const { email, phoneNumber, fullName, currentPassword, newPassword } = values
        props.updateProfile({ email, phone: phoneNumber, name: fullName, currentPassword, password: newPassword, avatar: props.avatar || JSON.parse(localStorage.getItem("user")).avatar })
    }
})(UserInnerForm);

export default UserForm