import axiosClient from "./axiosClient";

const authApi = {
    //TODO
    login: (body) => {
        const url = '/api/login';
        return axiosClient.post(url, body)
    },
    register: (body) => {
        const url = '/api/register';
        return axiosClient.post(url, body)
    }
}


export default authApi