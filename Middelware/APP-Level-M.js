const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Request received middelware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Request received middelware 2");
    next();
});

app.get('/', (req, res) => {
    res.send("Home page");
});

app.get('/about', (req, res) => {
    res.send("aboute page");
});

app.listen(3000);

app.use(express.json()); // parse JSON body built in middelware
// This middleware is used to read JSON data sent from the client (in POST/PUT requests).
// Client JSON
//    ↓
// express.json()
//    ↓
// req.body (JS Object)
//    ↓
// POST /user route