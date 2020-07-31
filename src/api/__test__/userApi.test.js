import mockAxios from 'axios';
import userApi from '../userApi';
jest.mock('axios')

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer asdazxc'
    }
}

const mockUpdate = {
    email: "abc@xyz.com",
    name: "asd asd",
    phone: "0123456789",

}

const mockChangePassword = {
    password: "123456789@Aa",
    currentPassword: "123456789@Ab"
}

const file = new File([''], 'filename.txt', {
    type: 'text/plain',
    lastModified: new Date()
})

const formData = new FormData()
formData.append('file', file)

describe('User api test', () => {
    it('should call a post upload request and return data', async () => {
        mockAxios.post.mockImplementationOnce(async () =>
            Promise.resolve({ data: {} })
        )
        const data = await userApi.upload(formData, config)
        expect(data).toEqual({ data: {} })
    });
    it('should call a post update request and return data', async () => {
        mockAxios.post.mockImplementationOnce(async () =>
            Promise.resolve({ data: {} })
        )
        const data = await userApi.update(mockUpdate, config)
        expect(data).toEqual({ data: {} })
    });
    it('should call a post update request and return data', async () => {
        mockAxios.post.mockImplementationOnce(async () =>
            Promise.resolve({ data: {} })
        )
        const data = await userApi.changePassword(mockChangePassword, config)
        expect(data).toEqual({ data: {} })
    });
})
