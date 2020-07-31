import { formSchema, loginSchema, registerSchema } from '..'

describe('Test validation schema', () => {
    describe("Login schema", () => {
        describe("Email & password are invalid", () => {
            it("Email and password are empty", async () => {
                const err = await loginSchema.isValid({ email: "", password: "" })
                expect(err).toBeFalsy()
            })
            it("Email is empty", async () => {
                const err = await loginSchema.isValid({ email: "", password: "123456789@Aa" })
                expect(err).toBeFalsy()
            })
            it("Password is empty", async () => {
                const err = await loginSchema.isValid({ email: "test@mail.com", password: "" })
                expect(err).toBeFalsy()
            })
        })
        describe("Email is invalid", () => {
            it("Email does not contain @ sign", async () => {
                const err = await loginSchema.isValid({ email: "asd.zxc", password: "123456789@Aa" })
                expect(err).toBeFalsy()
            })
            it("Email does not contain a domain extension", async () => {
                const err = await loginSchema.isValid({ email: "abc@zxc", password: "123456789@Aa" })
                expect(err).toBeFalsy()
            })
        })
        describe('Password is invalid', () => {
            it("Password does not contain 1 uppercase character", async () => {
                const err = await loginSchema.isValid({ email: "abc@xzy.com", password: "adasdasd@15" })
                expect(err).toBeFalsy()
            })
            it("Password does not contain 1 lowercase character", async () => {
                const err = await loginSchema.isValid({ email: "abc@xzy.com", password: "DASDASDZC@15" })
                expect(err).toBeFalsy()
            })
            it("Password does not contain 1 number", async () => {
                const err = await loginSchema.isValid({ email: "abc@xzy.com", password: "aszxczxczxA@" })
                expect(err).toBeFalsy()
            })
            it("Password does not contain 1 special character", async () => {
                const err = await loginSchema.isValid({ email: "abc@xzy.com", password: "123456789Ab" })
                expect(err).toBeFalsy()
            })
            it("Password does not contain at least 8 characters", async () => {
                const err = await loginSchema.isValid({ email: "abc@xzy.com", password: "1234@aB" })
                expect(err).toBeFalsy()
            })
        })
        describe('Valid email & password', () => {
            it("Valid email & password", async () => {
                const err = await loginSchema.isValid({ email: "abc@xzy.com", password: "123456789@Ab" })
                expect(err).toBeTruthy()
            })
        })
    })

})
