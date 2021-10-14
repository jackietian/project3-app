import axios from './axios'

export const loginApi = (data) => axios.post('/users/signin', data)
