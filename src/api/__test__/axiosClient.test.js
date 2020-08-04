// import axiosClient from '../axiosClient'
import mockAxios from '../../__mocks__/axios'

describe('Test axios instance', () => {
    it('should resolve promise', () => {
        expect(mockAxios.interceptors.response.handlers[0].fulfilled({ data: 'foo' })).toBe('foo');

    });
    it('should reject error', () => {
        expect(mockAxios.interceptors.response.handlers[0].rejected({
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
