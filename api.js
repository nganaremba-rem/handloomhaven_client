import axios from 'axios'
import endpoints from './endpoints'

const Axios = axios.create({
  // TODO: change the baseUrl when in production
  baseURL: 'http://192.168.0.103:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const register = (data) => Axios.post(endpoints.register, data)

export const handleLogin = (data) => Axios.post(endpoints.loginEndpoint, data)

export const fetchImage = (imageId) =>
  Axios.get(`${endpoints.image}/${imageId}`)

export default Axios
