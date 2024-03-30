import axios, { type CreateAxiosDefaults } from 'axios';

const options: CreateAxiosDefaults = {
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

const axiosInstance = axios.create(options)

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
    const accessToken = getAccessToken()
})

