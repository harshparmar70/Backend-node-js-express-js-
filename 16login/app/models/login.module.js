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

let loginModule = mongoose.model("login", loginSchema);

module.exports = loginModule;