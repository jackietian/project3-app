import axios from 'axios'
import { isAuthenticated } from '../services/utils'
import { getEmailAndToken } from '../services/sessionStorage'
const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
})

instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent

        const { token } = getEmailAndToken()
        if (isAuthenticated()) {
            config.headers['Authorization'] = 'Bearer ' + token
        }

        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

export default instance
