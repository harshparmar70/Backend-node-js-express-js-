const express = require("express");
const { dbConnection } = require("./dbConnection");
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

    const insertResult = await Studentcollection.insertOne(obj);
    console.log('Inserted documents =>', insertResult);

    let resOBJ = {
        status: 1,
        msg: "Data Insert ",
        insertResult
    }
    res.send(resOBJ)
})

app.listen("3000")