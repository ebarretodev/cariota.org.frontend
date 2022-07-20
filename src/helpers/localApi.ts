import { message } from 'antd';
import {db, auth } from './firebase'
import axios from 'axios';

// const apiBaseURL = 'http://localhost:5001/cariota-b56d7/us-central1/main/api/v1'
const apiBaseURL = 'https://cariota-b56d7.web.app/api/v1'

const localApi = {
    signin: (values: any) => {
        auth.signInWithEmailAndPassword(values.email, values.password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((err) => {
            message.error(err.message)
        });
    },

    signup: (values: any) => {
        auth.createUserWithEmailAndPassword(values.email, values.password)
            .then((userData) => {
                userData.user?.updateProfile({
                    displayName: values.username
                })
                if (userData.user) {

                    db.collection('users').doc(userData.user.uid).set({
                        username: values.username,
                        email: values.email,
                        photoURL: userData.user?.photoURL,
                        type: false
                    }).then(() => {
                        axios.post(`${apiBaseURL}/iota/createAccount`, {
                            uid: userData.user?.uid
                        }).then(res => {
                            if (userData.user) {
                                    localApi.requestFaucets(userData.user.uid, res.data.address)
                                    message.success("User create with success")
                                }
                                })
                    })
                }
            })
            .catch((err) => {
                console.log(err.message)
                message.error(err.message)
        })

    },

    logout: () => {
        auth.signOut()
    },

    balance: async ()=>{

    },
    userInfo: async () => {
        return {username: '', email: '', address: '', token: '' }
    },
    detailedTransactions: async () => {

    },
    requestFaucets: (token: string, address: string) => {
        axios.post(`${apiBaseURL}/iota/buy`, {
            address: address,
            token: token
        }).then((res) => {
            if (res.status = 200) {
               return message.success('Receive Faucets from IOTA.')
            }
        }).catch(err => {
            message.error(err.message)
            message.error(err.response.data.error)
        })
    },
    send: (values: any) => {
        axios.post(`${apiBaseURL}/iota/sendValue`, {
            address: values.address,
            token: values.token,
            amount: values.amount,
            message: values.message,
        }).then((res) => {
            if (res.status = 200) {
               return message.success('Request done.')
            }
        }).catch(err => {
            message.error(err.message)
            message.error(err.response.data.error)
        })
    }

}

export default () => localApi