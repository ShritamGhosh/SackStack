const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
    res.send("hey working");
});

module.exports = router; // Use the correct `module.exports`
