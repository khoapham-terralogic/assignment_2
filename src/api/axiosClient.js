import axios from 'axios'
import queryString from 'querystring'

const axiosClient = axios.create({
    baseURL: 'http://api.terralogic.ngrok.io',
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
    return config
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data)
        return response.data
}, (error) => {
    throw error
})

export default axiosClient