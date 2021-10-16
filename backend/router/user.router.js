const express = require('express')
const router = express.Router()

const { UserModel } = require('../models')

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

module.exports = router
