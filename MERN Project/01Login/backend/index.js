const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./Models/db")

let AuthRouers = require("./Routers/AuthRouters");

app.use(bodyParser.json());
app.use(cors())

app.use("/auth", AuthRouers);
const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
    console.log(`Server is Running ... Post : ${PORT}`);
})