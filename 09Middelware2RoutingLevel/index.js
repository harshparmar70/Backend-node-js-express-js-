let express = require("express");
require("dotenv").config();
const { chackToken } = require("./checkTokenMidd");

let app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is Home Api")
})

app.get('/news', chackToken, (req, res) => {
    res.send({
        "stutus": 0,
        "message": "News API"
    })
})

app.listen(process.env.port);