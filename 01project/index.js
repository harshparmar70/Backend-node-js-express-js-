// setting  up parsers for form

// setting  up ejs for ejs pages
// install ejs
//setup ejs as  view engine

// setting up public static files

// dynamic routing
// how to get data coming from frontend  at backend route


// setting  up ejs for ejs pages
const express = require("express");
const path = require("path");

const app = express();

// setting  up parsers for form
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))



app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/profile", (req, res) => {
    res.send("chalrahahei")
})

app.get("/profile/:name", (req, res) => {

    res.send(`welcome ${req.params.name}`)
})
app.listen(3000);