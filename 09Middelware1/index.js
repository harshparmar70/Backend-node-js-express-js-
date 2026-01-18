let express = require("express");

let app = express();

app.use(express.json())

let mytokan = "12345"
let chackToken = (req, res, next) => {
    console.log(req.query.token);

    if (req.query.token == "" || req.query.token == undefined) {
        return res.send({
            status: 0,
            msg: "please File the token"
        })
    }
    if (req.query.token != mytokan) {
        return res.send({
            status: 0,
            msg: "please File the currect token"
        })
    }
    next()
}

app.use(chackToken)

let mypass = "7071"
app.use((req, res, next) => {
    console.log(req.query.token);

    if (req.query.pass == "" || req.query.pass == undefined) {
        return res.send({
            status: 0,
            msg: "please File the password"
        })
    }
    if (req.query.pass != mypass) {
        return res.send({
            status: 0,
            msg: "please File the currect password"
        })
    }
    next()
})

app.get("/", (req, res) => {
    res.send("This is Home Api")
})

app.post('/news', (req, res) => {
    res.send(req.query.token)
})

app.listen(3000);