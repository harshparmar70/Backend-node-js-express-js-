const express = require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");

const app = express()

app.use(express.json());

app.get("/student-read", async(req, res) => {
    let mydb = await dbConnection()
    const Studentcollection = mydb.collection('student');

    let data = await Studentcollection.find().toArray();

    let resOBJ = {
        status: 1,
        msg: "Student list",
        data
    }
    res.send(resOBJ)
})

app.post("/student-insert", async(req, res) => {

    let mydb = await dbConnection()
    const Studentcollection = mydb.collection('student');

    // let obj = { sname: req.body.sname, semail: req.body.semail }
    // console.log(obj);
    let { sname, semail } = req.body;
    let obj = { sname, semail };
    console.log(obj);

    let CheckEmail = await Studentcollection.findOne({ semail: semail })
    console.log(CheckEmail);

    if (CheckEmail) {
        return res.send({
            status: 0,
            msg: "Emaile Id Alredy Exist..."
        })
    }
    const insertResult = await Studentcollection.insertOne(obj);
    let resOBJ = {
        status: 1,
        msg: "Data Insert ",
        insertResult
    }
    res.send(resOBJ);



})

app.delete("/student-delete/:id", async(req, res) => {
    let mydb = await dbConnection();
    const Studentcollection = mydb.collection("student");
    let paremsData = req.params.id
    console.log(paremsData);

    let deleteResult = await Studentcollection.deleteOne({ _id: new ObjectId(paremsData) })
    let resOBJ = {
        status: 1,
        msg: "Data deleted",
        deleteResult
    }
    res.send(resOBJ)
})

app.put("/student-update/:id", async(req, res) => {
    let paramdataId = req.params.id; //where
    let { sname, semail } = req.body;
    let obj = {}

    if (sname !== "" && sname !== undefined && sname !== null) {
        obj['sname'] = sname;
    }
    if (semail !== "" && semail !== undefined && semail !== null) {
        obj['semail'] = semail;
    }

    let mydb = await dbConnection();
    let Studentcollection = mydb.collection("student")
    const updateResult = await Studentcollection.updateOne({ _id: new ObjectId(paramdataId) }, { $set: obj });

    let OBJ = {
        status: 1,
        msg: "Data updated",
        updateResult
    }
    res.send(OBJ)
})

app.listen("3000");