import axios from 'axios'
import config from './config'


export function signIn(username, password) {
 return axios.post(`${config.HOST}${'/login'}`, {username, password})
}