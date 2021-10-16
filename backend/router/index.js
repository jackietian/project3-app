const express = require('express')
const auth = require('../middlewares/auth')

const users = require('./user.router')
const login = require('./login.router')
const register = require('./register.router')

const router = express.Router()

router.use('/login', login)
router.use('/register', register)
router.use('/users', auth, users)

module.exports = router
