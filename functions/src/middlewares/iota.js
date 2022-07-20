//Start environment variables
require('dotenv').config();

const { ClientBuilder } = require('@iota/client')

// client for messages will connect to Devnet and Local PoW.
const client = new ClientBuilder()
        .node(process.env.IOTA_URL_NETWORK)
        .localPow(true)
        .build()


/**************************************************************
                Account controller creation
***************************************************************** */

const createAccount = async() => {
    const mnemonic = client.generateMnemonic();
    const seed = client.mnemonicToHexSeed(mnemonic);
    const newAddressInput = await client.getAddresses(seed)
    .accountIndex(0)
    .range(0, 1)
    .get();
    const address = newAddressInput[0]

    const data = {
        mnemonic,
        seed,
        address,
    }
    return data
}

/**************************************************************
                Controlls to send and receive value and message
***************************************************************** */
//index standard must be: "CARIOTA MESSAGE: ${user}"
//messageData standard must be a json parse {"from": {user}, "to": {npc}, Value: {Number}, "Message":{mesage description}}
const sendMessage = async (seed, address, index, dataMessage ) => {
    const message = await client.message()
        .seed(seed)
        .index(index)
        .data(dataMessage)
        .submit();

    return message.messageId
}

const sendValue = async (seed, address, value, index, dataMessage) => {
    const message = await client.message()
        .seed(seed)
        .dustAllowanceOutput(address, value)
        .index(index)
        .data(dataMessage)
        .submit();
    return message.messageId
}

/**************************************************************
                Controlls to send and receive value and message
***************************************************************** */
const getBalance = async (address) => {
    const balance = await client.getAddressBalance(address)
    return balance
}



