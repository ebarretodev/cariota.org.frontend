import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        address: '',
        token: '',
        photoURL: '',
        type: false,
        isAnonimous: false
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setAddress: (state,action) => {
            state.address = action.payload
        },
        setToken: (state, action) =>{
            state.token = action.payload
        },
        setPhotoURL: (state, action) =>{
            state.photoURL = action.payload
        },
        setType: (state, action) =>{
            state.type = action.payload
        },
        setIsAnonimous: (state, action) => {
            state.type = action.payload
        },
        setBlankData: (state) => {
            state.username = ''
            state.email = ''
            state.address = ''
            state.token = ''
            state.photoURL = ''
            state.type = false
            state.isAnonimous= false
        }
    }
})

export const {setUsername, setEmail, setAddress, setToken, setType, setPhotoURL, setBlankData, setIsAnonimous} = slice.actions
export default slice.reducer
