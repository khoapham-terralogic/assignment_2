import axiosClient from '../axiosClient'

describe('Test axios instance', () => {
    it('should resolve promise', () => {
        expect(axiosClient.interceptors.response.handlers[0].fulfilled({ data: 'foo' })).toBe('foo');

    });
    it('should reject error', () => {
        expect(axiosClient.interceptors.response.handlers[0].rejected({
            response: {
                statusText: 'NotFound',
                status: 404,
                data: { message: 'Page not found' }
            }
        })).rejects.toMatchObject({
            message: 'NotFound',
            statusCode: 404,
            data: { message: 'Page not found' }
        })
    });


})
