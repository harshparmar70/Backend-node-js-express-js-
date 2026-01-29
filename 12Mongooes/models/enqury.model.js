const mongoose = require("mongoose");

const UserEnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const EnquiryModel = mongoose.model("enquiry", UserEnquirySchema);

module.exports = EnquiryModel;