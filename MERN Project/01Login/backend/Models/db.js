const mongoose = require("mongoose");

mongoose.connect(process.env.Mongo_URL)
    .then(() => {
        console.log("Mongo DB Connected ...");
    })
    .catch(err => {
        console.log("Mong Db Connection ERROR : ", err.message);
    })