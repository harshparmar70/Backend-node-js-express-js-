const express = require("express");
const app = express()


app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World api')
})

app.get('/news', (req, res) => {
    res.send('news api')
})

app.get('/news/:id', (req, res) => {
    let current = req.params.id
    res.send('news details api' + current)
})

app.post("/login", (req, res) => {
    console.log(req.body);

    res.status(200).json({
        status: 1,
        msg: "login",
        bodydata: req.body,
        qurydata: req.query
    })

    // res.send({
    //     status: 1,
    //     msg: "login",
    //     bodydata: req.body,
    //     qurydata: req.query
    // })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})