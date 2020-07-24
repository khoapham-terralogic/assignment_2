import { formSchema } from './schema'

const validate = async ({ field = "", value = "" }) => {
    try {
        await formSchema.validateAt(field, { [field]: value })
        return {
            status: true
        }
    } catch (error) {
        throw error
    }
}

export default validate
