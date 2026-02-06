const express = require("express");
const mongoose = require("mongoose");
const app = express();
let loginModule = require("./app/models/login.module");
let loginRoutes = require("./app/routes/loginRoutes");
app.use(express.json());

app.use("/api", loginRoutes);



mongoose.connect("mongodb://localhost:27017/loginapp").then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("server started on port 3000");
    })
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
});