const express = require("express");
const app = express();

// middleware
app.use(express.json());

// connect MongoDB
require("./db");

// test route
app.get("/", (req, res) => {
    res.send("Express connected with MongoDB");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});