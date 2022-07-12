import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        price: 0,
        balance: 0,
        incoming: 0,
        outgoing: 0,
        detailedTransactions: [
            {
                "approvedTimestamp": 0,
                "attachedTimestamp": 0,
                "from": "",
                'fromId': "",
                'messageID': "",
                "text": '',
                "to": '',
                "toId": '',
                "value": 0
            }
        ]
    },
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setBalance: (state, action) => {
            state.balance = action.payload
        },
        setIncoming: (state, action) => {
            state.incoming = action.payload
        },
        setOutgoing: (state,action) => {
            state.outgoing = action.payload
        },
        setDetailedTransaction: (state,action) => {
            state.detailedTransactions = action.payload
        },
    }
})

export const {setBalance, setIncoming, setOutgoing, setDetailedTransaction, setPrice} = slice.actions
export default slice.reducer
