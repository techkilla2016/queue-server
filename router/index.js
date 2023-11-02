require('dotenv').config()
require('../db/')
const { Router } = require('express')
const Home = require('./controller/home')
const Registration = require('./controller/registration')
const userAuth = require('./controller/auth')
const router = Router()

router.get('/', Home)
router.post('/registration', Registration)
router.post('/auth', userAuth)
module.exports = router