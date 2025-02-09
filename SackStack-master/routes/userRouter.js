const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/usermodel");
const jwt = require("jsonwebtoken");
router.get("/", function (req, res) {
    res.send("hey working");
});
router.post("/register", async function (req, res) {
    let { email, password, fullname } = req.body;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            if (err) return res.send(err.message);
            else {
                let user = await userModel.create({
                    email: email,
                    password: hash,
                    fullname: fullname
                });
                let token = jwt.sign({email,id:user._id},"anurag");
                res.cookie("token",token);
                res.send("user created successfully")
            }
        })
    })

});

module.exports = router;
