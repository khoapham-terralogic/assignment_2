import axios from 'axios'
import queryString from 'querystring'

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
    return config
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data)
        return response.data
    return response

}, (error) => {
    console.log(error)
    throw error
})

export default axiosClient