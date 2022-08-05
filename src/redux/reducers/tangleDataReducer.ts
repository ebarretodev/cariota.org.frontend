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
        setBlankDataTangle: (state) => {
            state.price= 0
            state.balance= 0
            state.incoming= 0
            state.outgoing= 0
            state.detailedTransactions= [
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
        }
    }
})

export const {setBalance, setIncoming, setOutgoing, setDetailedTransaction, setPrice,setBlankDataTangle} = slice.actions
export default slice.reducer
