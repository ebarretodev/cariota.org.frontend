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
                "error": "Message no longer available on Tangle",
                "timestamp": 0,
                "amount": 0,
                "type": 'send',
                "messageId": '',
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
        setClearData: (state, action) => {
            state = {
                price: 0,
                balance: 0,
                incoming: 0,
                outgoing: 0,
                detailedTransactions: [
                    {
                        "error": "Message no longer available on Tangle",
                        "timestamp": 0,
                        "amount": 0,
                        "type": 'send',
                        "messageId": '',
                    }
                ]
            }
        }
    }
})

export const {setBalance, setIncoming, setOutgoing, setDetailedTransaction, setPrice, setClearData} = slice.actions
export default slice.reducer
