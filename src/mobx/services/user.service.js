import { host } from '../host.constant'
import axios from 'axios'

class UserService {
    regUser = async (user) => {
        return axios.post(`${host}/user/register`, user)
    }
    login = async (user) => {
        return axios.post(`${host}/user/login`, user, {withCredentials: true})
    }
    logout = async () => {
        return axios.post(`${host}/user/logout`, {}, {withCredentials: true})
    }
    refresh = async () => {
        return axios.get(`${host}/user/self`, {withCredentials: true})
    }
}

export default UserService