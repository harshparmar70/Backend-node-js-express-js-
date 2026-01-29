const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
let enquryModel = require("./models/enqury.model");

const app = express();
app.use(express.json());

app.post("/api/enquiry-insert", (req, res) => {
    let { sname, semail, smessage, sphoneNo } = req.body;
    // console.log(sname, semail, smessage, sphoneNo);
    let enqury = enquryModel({
        name: sname,
        email: semail,
        phone: sphoneNo,
        message: smessage
    })
    enqury.save().then(() => {
        res.send({
            status: 1,
            message: "Enqury saved Successfully"
        })
    }).catch((err) => {
        res.send({ status: 0, message: err.message })
    })

})

app.get("/api/enquiry-list", async(req, res) => {

    let enqurylist = await enquryModel.find()
    res.status(200).json({ status: 200, message: "Success", Data: enqurylist })
})

app.delete("/api/enquiry-delete/:id", async(req, res) => {
    let enquiryId = req.params.id;
    console.log(enquiryId);

    let DeleteEnquiry = await enquryModel.deleteOne({ _id: enquiryId })

    res.send({ status: 0, message: "Delete Api", id: enquiryId, delResponse: DeleteEnquiry })


})

mongoose.connect(process.env.mongo_url)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:");
    });