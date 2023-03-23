const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userschema = require('../Models/user');


router.use(express.json());

const salt = 10;

// post api for user registration

router.post('/signup', async (req, res) => {
    try {
        const { email, password, cpassword } = req.body;
        if (!email || !password || !cpassword) {
            return res.status(400).json({
                status: "failed",
                message: "all fields are required"
            })
        }
        const userData = await userschema.findOne({ email })
        if (userData) {
            return res.status(400).json({
                status: "failed",
                message: "user is already registered"
            })
        }
        if (password !== cpassword) {
            return res.status(400).json({
                status: "failed",
                message: "password does not match"
            })
        }
        // hashing password
        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) {
                return res.status(400).json({
                    status: "failed",
                    message: err.message
                })
            }
            //creating n new user
            const userData = await userschema.create({
                email: email,
                password: hash
            })
            return res.status(200).json({
                status: "success",
                message: "user registered successfully",
                userData
            })
        })

    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})
module.exports = router;

