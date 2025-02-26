const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");


router.post("/create", async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.send(503)
                .send("You dont have permission to create a new owner");
        }
        let { fullname, email, password } = req.body;
        let createdOwner =  await ownerModel.create({
            fullname,
            email,
            password,
        });
        res.status(201).send(createdOwner);
    });

router.get("/", function (req, res) {
    res.send("hey working");
})


module.exports = router;
