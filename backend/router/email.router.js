const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/', async (req, res) => {
    console.log('email....')
    try {
        let transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        let mailOptions = {
            from: process.env.EMAIL,
            to: 'zhonghua2412@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!',
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })

        res.status(201).send('email sent')
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

module.exports = router
