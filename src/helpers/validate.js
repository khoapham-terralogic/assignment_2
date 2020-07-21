import { loginSchema, registerSchema } from './schema'

const validate = async ({ type = null, field = "", value = "" }) => {
    try {
        if (type === "login") {
            await loginSchema.validateAt(field, { [field]: value })
            return {
                status: true
            }
        }
        if (type === "register") {
            await registerSchema.validateAt(field, { [field]: value })
            return {
                status: true
            }
        }
        console.log("PLEASE ENTER VALIDATE TYPE");
    } catch (error) {
        return {
            errorMsg: error.message,
            status: false
        }
    }
}

export default validate
