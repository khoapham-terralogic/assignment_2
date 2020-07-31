import React from 'react';
import { withFormik } from 'formik';
import Formgroup from '../FormGroup'
import { emailSvg, eyeSvg, eyeSvgShow, keySvg } from '../../../../../constants'
import { loginSchema } from '../../../../../helpers/schema'
import { MyNavLink } from '../../../../../components';

export const LoginInnerForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <form data-testid="login-form" className="login-body" onSubmit={handleSubmit}>
            <div className="form-container">
                <Formgroup
                    data-testid="email-input"
                    id="email"
                    name="email"
                    type="email"
                    label="email"
                    labelName="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    frontSvg={emailSvg}
                    onBlur={handleBlur} />
                {touched.email && errors.email && <p className="errorMessage">{errors.email}</p>}
            </div>

            <div className="form-container">
                <Formgroup
                    id="password"
                    name="password"
                    type="password"
                    label="password"
                    labelName="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    frontSvg={keySvg} rearSvg={eyeSvg}
                    rearSvgShow={eyeSvgShow}
                    onBlur={handleBlur} />
                {touched.password && errors.password && <p className="errorMessage">{errors.password}</p>}</div>
            <div className="form-group login-body-btn-group">
                <MyNavLink toPath="/auth/register" lable="Register" />
                <button type="submit" className="btn nav-link nav-link-btn">Login</button>
            </div>
            <div className="form-container checkbox-container">
                <input type="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
            </div>
        </form>

    );
};

const LoginForm = withFormik({
    mapPropsToValues: ({ email, password }) => ({
        email: email || '',
        password: password || ''
    }),
    // Custom sync validation
    validationSchema: loginSchema,
    handleSubmit: (values, { props }) => {
        props.loginUser(values)
    }
})(LoginInnerForm);

export default LoginForm