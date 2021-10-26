const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { UserModel } = require('../models')

router.post('/', async (req, res) => {
    const { email, password } = req.body

    try {
        const oldUser = await UserModel.findOne({ email })

        if (!oldUser)
            return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(
            password,
            oldUser.password
        )

        if (!isPasswordCorrect)
            return res.status(400).json({ message: 'Invalid credentials' })

        const token = jwt.sign(
            { email: oldUser.email, id: oldUser._id },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            }
        )

        res.status(200).json({ result: oldUser, token })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
})

module.exports = router
