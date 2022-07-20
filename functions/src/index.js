const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const routerV1 = require('./routes')

const api = express()
const main = express()

main.use(cors({
    origin: true
}))


api.use(cors({
    origin: true
}))
api.use('/v1', routerV1)

api.use(express.json())
api.use(express.urlencoded({extended:true}))

//Case not found
api.use((req, res) => {
    res.status(404)
    res.json({ error: 'Not found endpoint' })
})

//Case occurs error on request
const errorHandler = (err, req, res, next) => {
    res.status(err.status ? err.status : 400)
    res.json({error: err.message ? err.message : 'Error occurs.'})
}
api.use(errorHandler);

main.use('/api', api)

exports.main = functions.https.onRequest(main);