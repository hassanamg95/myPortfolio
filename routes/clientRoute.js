const express = require('express')
const  createClient  = require('./../controllers/clientController')


const router = express.Router()

router.post('/contact', createClient)

module.exports = router