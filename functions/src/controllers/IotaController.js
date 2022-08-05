//Import axios and Iota lib
const axios = require('axios')
const { ClientBuilder } = require('@iota/client')

//firebase access
const functions = require('firebase-functions');
const admin = require('firebase-admin');

//initialize firebase in order to access its services
admin.initializeApp(functions.config().firebase);
const db = admin.firestore()

// client for messages will connect to Devnet and Local PoW.
const client = new ClientBuilder()
        .node('https://api.lb-0.h.chrysalis-devnet.iota.cafe:443')
        .localPow(true)
        .build()

const getBalance = async (address) => {
    let balanceData = await client.getAddressBalance(address)
    let balance = balanceData.balance
    return balance
}

const checkBalanceAlter = async(address, uid) => {
    let balanceRequested = await getBalance(address)
    let lastBalance = balanceRequested
    while (balanceRequested == lastBalance) {
        balanceRequested = await getBalance(address)
    }
    let value = balanceRequested - lastBalance
    return value
}


//Create functions for export
module.exports = {
    buy: async (req, res) => {
        /*method Post
        Endpoint:  https://faucet.chrysalis-devnet.iota.cafe/api/plugins/faucet/enqueue
        Content-Type: application/json
        body: {
            "address":"atoi1..."
        }
        */
        if (!req.body.address) {
            res.status(401).json({ error: { message: 'Not authorized, needs a address' }})
        }
        if (!req.body.token) {
            res.status(401).json({ error: { message: 'Not authorized, needs a user identifier' } })
        }

        let attachedTimestamp = (Date.now()).toFixed(0)
        var userRef = await db.collection('users').doc(req.body.token).get()

        let newTransactionRef

        db.collection('transactions').add({
            attachedTimestamp,
            from: 'IOTA.FAUCETS',
            fromId: '999999999999999',
            messageID: null,
            text: 'Requested Iota Faucets on server',
            to: userRef.data().username,
            toId: req.body.token,
            value: 0
        }).then((docRef) => {
            newTransactionRef = docRef.id
        })

        axios
            .post('https://faucet.chrysalis-devnet.iota.cafe/api/plugins/faucet/enqueue', {

                address: req.body.address
            })
            .then(async (data) => {

                let value = await checkBalanceAlter(req.body.address)

                let balanceRequested = await getBalance(req.body.address)
                console.log(`last request: ${balanceRequested}`)

                db.collection('users').doc(req.body.token).update({
                    balance: balanceRequested
                })
                let approvedTimestamp = (Date.now()).toFixed(0)

                db.collection('transactions').doc(newTransactionRef).update({
                    approvedTimestamp,
                    value
                })

                res.status(200).json({message:"Iota sended to address"})
            })
            .catch(error => {
                let approvedTimestamp = -1
                let value = 0
                db.collection('transactions').doc(newTransactionRef).update({
                    approvedTimestamp,
                    value,
                })
                if(error.response.data.error){
                    res.status(error.response.data.error.code).json({ error: (error.response.data.error.message) } )
                }
                res.status(error.response.status).json({ error: (error.response.statusText) } )
            })
    },
    balance: async (req, res) => {
        if (!req.body.token) {
            return res.status(400).json({error: 'Check token data'})
        }

        let userId = req.body.token
        let userAddress = ''
        let userBalance = ''

        await db.collection('users').doc(userId).get().then((doc) => {
            userAddress = doc.data().address
            userBalance = doc.data().balance
        })

        let checkUserBalance = await getBalance(userAddress)

        if (userBalance != checkUserBalance) {
            await db.collection('users').doc(userId).update({
                balance: checkUserBalance
            })
            userBalance = checkUserBalance
        }

        res.status(200).json({
            balance: userBalance
         })
    },

    sendValue: async (req, res)=> {
        if(!req.body || !req.body.address || !req.body.amount || !req.body.message || !req.body.token){
           return res.status(400).json({error: 'Check values'})
        }
        if(typeof(req.body.amount) == 'string') {
            req.body.amount = parseInt(req.body.amount)
        }

        let userReceiveName = ''
        let userReceiveAddress = req.body.address
        let userReceiveUid = ''

        let userSendSeed = ''
        let userSendName = ''
        let userSendAddress
        let userSendUid = req.body.token

        let transactionRef = ''

        await db.collection('users')
            .where('address', '==', req.body.address)
            .get()
            .then((query) => {
                query.forEach((doc) => {
                    userReceiveName = doc.data().username
                    userReceiveUid = doc.id
                    })
                })

        await db.collection('users')
            .doc(req.body.token)
            .get()
            .then((doc) => {
                userSendName = doc.data().username
                userSendAddress = doc.data().address
            })

        userSendBalance = await getBalance(userSendAddress)
        userReceiveBalance = await getBalance(userReceiveAddress)

        if (userSendBalance < req.body.amount) {
            return res.status(401).json({message: 'No funds enough to this transaction'})
        }

        let attachedTimestamp = (Date.now()).toFixed(0)

        await db.collection('transactions').add({
            attachedTimestamp,
            from: userSendName,
            fromId: userSendUid,
            text: req.body.message,
            messageID: null,
            to: userReceiveName,
            toId: userReceiveUid,
            value: req.body.amount
        }).then((docRef) => {
            transactionRef = docRef.id
        })


        await db.collection('users')
            .doc(req.body.token)
            .collection('private')
            .doc('iotaData')
            .get()
            .then((doc) => {
                userSendSeed = doc.data().seed
            })

        let index = `CARIOTA: ${userSendName}`

        const message = await client.message()
            .seed(userSendSeed)
            .dustAllowanceOutput(req.body.address, req.body.amount)
            .index(index)
            .data(req.body.message)
            .submit();

        let approvedTimestamp = (Date.now()).toFixed(0)

        await db.collection('transactions').doc(transactionRef).update({
            approvedTimestamp,
            messageID: message.messageId
        })

        userSendBalance -= req.body.amount
        userReceiveBalance += req.body.amount

        await db.collection('users').doc(userSendUid).update({
            balance: userSendBalance
        })

        await db.collection('users').doc(userReceiveUid).update({
            balance: userReceiveBalance
        })

        res.status(200).json(message)
    },
    createAccount: async (req, res) => {
        const uid = req.body.uid
        if (!uid) {
            return res.status(401).json({"error": 'Add user reference to request.'})
        }
        const mnemonic = client.generateMnemonic();
        const seed = client.mnemonicToHexSeed(mnemonic);
        const newAddressInput = await client.getAddresses(seed)
            .accountIndex(0)
            .range(0, 1)
            .get();
        const address = newAddressInput[0]

        db.collection('users').doc(uid).update({
            address: address,
            balance: 0,
        })
        db.collection('users').doc(uid).collection('private').doc('iotaData').set({
            menmonic: mnemonic,
            seed: seed,
        })

        res.status(200).json({res: 'Account created with success', address: address})
    },
    checkOp: async (req, res) => {
        if (!req.body.seed) {
            return res.status(400).json({message: 'Check seed value.'})
        }
        const message = await client
                .getAddresses(req.body.seed)
                .accountIndex(0)
                .get()
        res.status(200).json(message)
    }
}