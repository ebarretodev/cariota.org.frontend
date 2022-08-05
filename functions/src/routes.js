//Import Middlewares
const IotaController = require('./controllers/IotaController')

const express = require('express');
const router = express.Router();

//Welcome message
router.get('/', (req, res)=>{
    res.status(200).json({message: 'Welcome to API.v1.3 to CarWallet Simulator. Consult https://www.cariota.org for more informations', edited: 'July 12th, 2022'})
})

router.post('/iota/buy', IotaController.buy)
router.post('/iota/balance', IotaController.balance)
router.post('/iota/sendValue', IotaController.sendValue)
router.post('/iota/createAccount', IotaController.createAccount)
router.get('/test', IotaController.checkOp)

 module.exports = router