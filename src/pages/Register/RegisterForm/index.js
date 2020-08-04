import React from 'react';
import { withFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { emailSvg, eyeSvg, eyeSvgShow, keySvg } from '../../../constants'
import { registerSchema } from '../../../helpers/schema'
import FormGroup from '../../Login/FormGroup';
import { MyNavLink } from '../../../components';

const MyForm = props => {
    const history = useHistory()
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    const goBack = () => { history.goBack() }
    return (
        <form className="login-body" onSubmit={handleSubmit}>
            <div className="form-container">
                <FormGroup id="email"

                    type="email"
                    label="email"

                    placeholder="Enter your email"
                    labelName="email" value={values.email}

                    onChange={handleChange}

                    frontSvg={emailSvg}
                    onBlur={handleBlur} />
                {touched.email && errors.email && <p className="errorMessage">{errors.email}</p>}
            </div>
            <div className="form-container">
                <FormGroup id="password"
                    type="password"
                    label="password"
                    placeholder="Enter your password"
                    labelName="password"
                    value={values.password}
                    onChange={handleChange}
                    frontSvg={keySvg}
                    rearSvg={eyeSvg}
                    rearSvgShow={eyeSvgShow}
                    onBlur={handleBlur} />
                {touched.password && errors.password && <p className="errorMessage">{errors.password}</p>}
            </div>
            <div className="form-container">
                <FormGroup id="confirmPassword"
                    type="password"
                    label="conPassword"
                    placeholder="Enter your password"
                    labelName="confirm password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    frontSvg={keySvg}
                    rearSvg={eyeSvg}
                    rearSvgShow={eyeSvgShow}
                    onBlur={handleBlur} />
                {touched.confirmPassword && errors.confirmPassword && <p className="errorMessage">{errors.confirmPassword}</p>}
            </div>
            <div className="form-container">
                <FormGroup id="fullName"
                    type="text"
                    label="fullName"
                    labelName="full name"
                    placeholder="Enter your name"
                    value={values.fullName}
                    onChange={handleChange}
                    frontSvg={emailSvg}
                    onBlur={handleBlur} />
                {touched.fullName && errors.fullName && <p className="errorMessage">{errors.fullName}</p>}
            </div>
            <div className="form-container">
                <FormGroup id="phoneNumber"
                    type="text"
                    label="phoneNumber"
                    labelName="phone number"
                    placeholder="Enter your phone"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    frontSvg={emailSvg}
                    onBlur={handleBlur} />
                {touched.phoneNumber && errors.phoneNumber && <p className="errorMessage">{errors.phoneNumber}</p>}
            </div>
            <div className="form-group login-body-btn-group">
                <MyNavLink onClick={goBack} toPath="#" lable="Back" />
                <button className="btn nav-link nav-link-btn">Submit</button>
            </div>
        </form>
    );
};

const RegisterForm = withFormik({
    mapPropsToValues: ({ email, password, confirmPassword, fullName, phoneNumber }) => ({
        email: email || '',
        password: password || '',
        confirmPassword: confirmPassword || "",
        fullName: fullName || "",
        phoneNumber: phoneNumber || ""

    }),
    // Custom sync validation
    validationSchema: registerSchema,
    handleSubmit: ({ email, password, fullName: name, phoneNumber: phone }, { props }) => {
        props.registerUser({ email, password, name, phone })
    }
})(MyForm);

export default RegisterForm

