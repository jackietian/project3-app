const express = require('express')

const cors = require('cors')
const helmet = require('helmet')
const router = require('./router/index')

const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use('/api', router)

module.exports = app
