import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    fullName: Yup.string().matches(/^[a-z ,.'-]+$/i, { message: "Invalid name" }).required("Full name is required"),
    email: Yup.string().email("Email must be a valid email").required("Email is required"),
    phoneNumber: Yup.string().matches(/(09|01[2|6|8|9])+([0-9]{7})\b/, { message: "Invalid phone number" }).required("Phone number is required"),
    newPassword: Yup.string().min(4, "Password must be at least 4 characters long").required("Password is required"),
    currentPassword: Yup.string().min(4, "Password must be at least 4 characters long").required("Current is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords do not match').required("Confirm password is required"),
})

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email must be a valid email").required("Email is required"),
    password: Yup.string().min(4, "Password must be at least 4 characters long").required("Password is required"),
})

export const registerSchema = Yup.object().shape({
    email: Yup.string().email("Email must be a valid email").required("Email is required"),
    password: Yup.string().min(4, "Password must be at least 4 characters long").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required("Confirm password is required"),
    fullName: Yup.string().matches(/^[a-z ,.'-]+$/i, { message: "Invalid name" }).required("Full name is required"),
    phoneNumber: Yup.string().matches(/(09|01[2|6|8|9])+([0-9]{7})\b/, { message: "Invalid phone number" }).required("Phone number is required")
})