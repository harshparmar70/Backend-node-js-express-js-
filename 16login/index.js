let express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
let login = require("./login.model");
let app = express();

app.use(express.json());

app.post('/insert', (req, res) => {
    let { email, password } = req.body;

    let loginData = login(email, password);

    loginData.save()
        .then(() => {
            res.send({
                status: 1,
                message: "Inserted Successfully"
            })
        }).catch((err) => {
            res.send({
                status: 0,
                message: err.message
            })
        })

});

mongoose.connect(process.env.mongo_url)
    .then(app.listen(process.env.PORT, () => {
        console.log('Server started at port : ' + process.env.PORT);
    })).catch((err) => {
        console.log('Error in DB connection: ' + err);
    });