const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    email: String,
    password: String,
    userType: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const User = model('User', userSchema)

module.exports = User
