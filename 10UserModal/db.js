const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));