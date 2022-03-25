import { message } from 'antd';
import axios from 'axios'

export const getToken = () => {
    return window.localStorage.getItem('token')
}


export const deleteToken = () => {
    window.localStorage.removeItem('token')
    delete http.defaults.headers.common['Authorization']
}

export const http = axios.create({
    baseURL: 'http://localhost:5000/',
  });

export const storeToken = (token: string) => {
    window.localStorage.setItem('token', token)
    http.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`
}

const localApi = {
    balance: async ()=>{
        return (await http.get('/iota/balance')).data.balance
    },
    detailedTransactions: async () => {
        return (await http.get('/iota/detailed')).data
    },
    requestFaucets: () => {
        http.get('/iota/buy')
            .then(res=>message.success(res.data.message))
            .catch(error=>message.error(error.response.data.error))
    },
    send: (values: any) => {
        message.info('Request added')
        http.post('/iota/sendValue', values)
            .then(res=>console.log(res))
            .catch(error=>message.error(error.response.data.error))
    },
    signin : (values: any) => {
         return http.post('/signin', values)
    },
    signup : (values: any)=> {
        return http.post('/signup', values)
    },
    userInfo: async () => {
        return (await http.get('/user/me')).data.me
    }
}

export default () => localApi