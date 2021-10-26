require('dotenv').config()
const mongoose = require('mongoose')

const app = require('./app')

mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App listening at http://localhost:${process.env.PORT}`)
        })
    })
    .catch((e) => console.log(e.message))
