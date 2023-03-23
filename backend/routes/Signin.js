const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = require('../Models/user')

const SECRET_KEY = "p1r1i1y1a1n1k1g1a1n1g1w1a1r1";

router.use(express.json());

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({
                status: "failed",
                message: "all fields are required"
            })
        }
        const userValid = await userSchema.findOne({ email })
        if (!userValid) {
            res.status(400).json({
                status: "failed",
                message: "user is not registered"
            })
        }
        else {
            //matching password
            const matchPass = await bcrypt.compare(password, userValid.password)
            if (!matchPass) {
                res.status(400).json({
                    status: "failed",
                    message: "incorrect password"
                })
            } else {
                const token = jwt.sign({ id: userValid._id, email: userValid.email }, SECRET_KEY)
                res.status(400).json({
                    status: "success",
                    message: "user logged in successfully!",
                    token, id: userValid._id
                })
            }
        }

    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
});
module.exports = router;