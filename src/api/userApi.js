import axiosClient from './axiosClient'

const userApi = {
    upload: (body, config) => {
        const url = "/api/upload";
        return axiosClient.post(url, body, config);
    },
    update: (body, config) => {
        const url = "/api/update";
        return axiosClient.patch(url, body, config);
    },
    changePassword: (body, config) => {
        const url = "/api/changePassword";
        return axiosClient.post(url, body, config);
    }
}
export default userApi