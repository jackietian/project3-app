import axios from './axios'

export const getMovies = (params) => axios.get('/movies', { params })
