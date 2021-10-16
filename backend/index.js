require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const router = require('./router/index')

const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use('/api', router)

mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App listening at http://localhost:${process.env.PORT}`)
        })
    })
    .catch((e) => console.log(e.message))
