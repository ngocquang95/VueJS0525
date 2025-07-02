import axios from 'axios';

const baseAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

// hander error
baseAxios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 404) {
            console.log('Not found')
        } else if (error.response.status === 500) {
            console.log('Internal server error')
        } else if (error.response.status === 400) {
            console.log('Bad request')
        } else if (error.response.status === 401) {
            console.log('Unauthorized')
        }
        return Promise.reject(error)
    }
)

export default baseAxios;