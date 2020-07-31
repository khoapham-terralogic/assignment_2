import mockAxios from 'axios';
import authApi from '../authApi'
jest.mock('axios')
describe('Auth api test', () => {
    const mockLogin = {
        email: "abc@xyz.com",
        password: "123456789@Ab"
    }
    const mockRegister = {
        email: "abc@xyz.com",
        password: "123456789@Ab",
        name: "asd asd",
        phone: "0123456789"
    }
    it('call a valid login request and return data', async () => {
        mockAxios.post.mockImplementationOnce(async () =>
            Promise.resolve({ data: {} })
        )
        const data = await authApi.login(mockLogin)
        expect(data).toEqual({ data: {} })
    });
    it('call a valid register request and return data', async () => {
        mockAxios.post.mockImplementationOnce(async () =>
            Promise.resolve({ data: {} })
        )
        const data = await authApi.register(mockRegister)
        expect(data).toEqual({ data: {} })
    })
    it('call an invalid login request and return error', async () => {
        mockAxios.post.mockImplementationOnce(async () =>
            Promise.reject({ error: "Bad request" }))
        await authApi.login({}).catch(e => expect(e).toEqual({ error: "Bad request" }))
    });
    it('call an invalid register request and return error', async () => {
        mockAxios.post.mockImplementationOnce(async () =>
            Promise.reject({ error: "Bad request" }))
        await authApi.register({}).catch(e => expect(e).toEqual({ error: "Bad request" }))
    });


})
