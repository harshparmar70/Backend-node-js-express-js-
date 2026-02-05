let mongoose = require("mongoose");

let loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

let loginModel = mongoose.model("login", loginSchema)

module.exports = loginModel