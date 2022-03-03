import axios from 'axios'
import { isAuthenticated } from '../services/utils'
import { getEmailAndToken } from '../services/sessionStorage'
import { addToast } from '../state/toast/toast.action'
import { store } from '../index'

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

instance.interceptors.response.use(
    function (response) {
        console.log(
            `${response.config.method}: ${response.status} - ${response.config.url} `
        )
        return response
    },
    function (error) {
        // Do something with response error

        /**
         * error: {
         * data: {message: 'Invalid credentials'}
         * status: 400
         * }
         */

        const {
            status,
            data: { message },
        } = error.response

        if (status >= 400) {
            store.dispatch(addToast(message))
        }

        return Promise.reject(error)
    }
)

export default instance
