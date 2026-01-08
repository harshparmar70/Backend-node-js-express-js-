const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Home page get")
})

app.get("/product", (request, response) => {
    response.send("product page Get")
})

app.listen("2000", () => {
    console.log("server created");

})

app.post('/users', (req, res) => {
    res.send('User list Post');
});