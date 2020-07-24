import * as yup from 'yup';

export const formSchema = yup.object().shape({
    email: yup.string().email("Email must be a valid email").required("Email is required"),
    password: yup.string().min(4, "Password must be at least 4 characters long").required("Password is required"),
    conPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match').required("Confirm password is required"),
    fullName: yup.string().matches(/^[a-z ,.'-]+$/i, { message: "Invalid name" }).required("Full name is required"),
    phoneNumber: yup.string().matches(/(09|01[2|6|8|9])+([0-9]{7})\b/, { message: "Invalid phone number" }).required("Phone number is required")
})