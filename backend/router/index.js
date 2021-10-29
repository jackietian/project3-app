const express = require('express')
const auth = require('../middlewares/auth')

const users = require('./user.router')
const login = require('./login.router')
const register = require('./register.router')
const movies = require('./movies.router')
const email = require('./email.router')

const router = express.Router()

router.use('/login', login)
router.use('/register', register)
router.use('/users', auth, users)
router.use('/movies', movies)
router.use('/email', email)

module.exports = router
