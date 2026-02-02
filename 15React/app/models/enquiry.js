const mongoose = require("mongoose");
enquitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true,
    },
    // password: {
    //     type: String,
    //     required: true,
    // },
    phone: {
        type: String,
        required: true,
    }

})

enquiryModel = mongoose.model("enquiry", enquitySchema);
module.exports = enquiryModel;