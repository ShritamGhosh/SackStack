const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
mongoose
    .connect("mongodb://127.0.0.1:27017/bags")
    .then(function () {
        console.log("connection Build");
    })
    .catch(function (err) {
        console.log(err);
    })
module.exports = mongoose.connection;
