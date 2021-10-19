const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { UserModel } = require('../models')

router.post('/', async (req, res) => {
    const { email, password } = req.body

    try {
        const oldUser = await UserModel.findOne({ email })

        if (oldUser)
            return res.status(400).json({ message: 'User already exists' })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await UserModel.create({
            email,
            password: hashedPassword,
        })

        res.status(201).json({ result })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

module.exports = router
