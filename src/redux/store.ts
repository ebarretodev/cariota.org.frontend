import { configureStore } from '@reduxjs/toolkit'
import tangleDataReducer from './reducers/tangleDataReducer'
import userReducer from './reducers/userReducer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        tangleData: tangleDataReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

