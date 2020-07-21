import * as yup from 'yup';

yup.addMethod(yup.mixed, 'sameAs', function (ref, message) {
    return this.test('sameAs', message, function (value) {
        let other = this.resolve(ref)
        return !other || !value || value === other
    })
})

export const loginSchema = yup.object().shape({
    email: yup.string().email("Email must be a valid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required")
})

export const registerSchema = yup.object().shape({
    email: yup.string().email("Email must be a valid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
    confirmPassword: yup.string().matches(yup.ref('password', "Passwords do not match")).required("Confirm password is required"),
    fullName: yup.string().required(),
    phoneNumber: yup.string().required()
})