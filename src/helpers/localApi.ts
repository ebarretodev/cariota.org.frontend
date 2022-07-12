import { message } from 'antd';
import {db, auth } from './firebase'


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
                    })
                        .then(() => {
                        message.success("User create with success")
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
    requestFaucets: () => {

    },
    send: (values: any) => {

    }

}

export default () => localApi