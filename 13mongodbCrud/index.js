const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose");
const userModel = require("./models/user.model");

const app = express();
app.use(express.json());

app.post("/insert-user", (req, res) => {
    let { uname, uemail, password } = req.body;
    let DataModel = userModel({
        name: uname,
        email: uemail,
        password: password
    })
    DataModel.save().then(() => {
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

})

app.get("/get-users", async(req, res) => {
    let UserList = await userModel.find()
    res.send({ status: 1, message: "Get Data", Data: UserList })
})

app.delete("/delete-user", async(req, res) => {
    let id = req.query.id;
    let Userupadate = await userModel.deleteOne({ _id: id })
    res.send({ status: 1, message: "Delete Api", Data: Userupadate })
})

app.put("/update-user/:id", async(req, res) => {

    let Updateid = req.params.id;
    let { uname, uemail, password } = req.body;
    UpdateOBj = {
        name: uname,
        email: uemail,
        password: password
    }
    userUpdate = await userModel.updateOne({ _id: Updateid }, UpdateOBj)
    res.send({ status: 1, message: "update API", Data: userUpdate })
})
mongoose.connect(process.env.mongo_url).then(() => {
    console.log("Connected DataBase...");
    app.listen(process.env.PORT, (req, res) => {
        console.log(`Server running on port ${process.env.PORT}`);

    })
})