import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        address: '',
        token: '',
        type: ''
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
        setType: (state, action) =>{
            state.type = action.payload
        }
    }
})

export const {setUsername, setEmail, setAddress, setToken, setType} = slice.actions
export default slice.reducer
