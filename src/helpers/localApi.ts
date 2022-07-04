import { message } from 'antd';
import axios from 'axios'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const getToken = () => {
    return window.localStorage.getItem('token')
}

export const http = axios.create({
    //baseURL: 'http://localhost:5000/',
    baseURL: 'https://api.cariota.org/',
  });

export const deleteToken = () => {
    window.localStorage.removeItem('token')
    delete http.defaults.headers.common['Authorization']
}

export const storeToken = (token: string) => {
    window.localStorage.setItem('token', token)
    http.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`
}


const localApi = {
    signin: (values: any) => {
        const [email, password] = values
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
}

export default () => localApi