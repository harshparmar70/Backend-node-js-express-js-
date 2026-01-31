const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const app = express();
app.use(express.json());

app.use("/web/api/enquiry", require("./app/routes/web/enquiryRoutes"));

//localhost:3000/web/api/enquiry/enquiry-insert
//localhost:3000/web/api/enquiry/enquiry-list
//localhost:3000/web/api/enquiry/enquiry-delete/:id
//localhost:3000/web/api/enquiry/enquiry-update/:id

mongoose.connect(process.env.mongo_url)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });