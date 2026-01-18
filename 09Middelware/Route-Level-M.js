const express = require('express');
const app = express();

function checkLogin(req, res, next) {
    const loggedIn = false;

    if (loggedIn) {
        next();
    } else {
        res.send("Not logged in");
    }
}

app.get('/dashboard', checkLogin, (req, res) => {
    res.send("Welcome to dashboard");
});

app.listen(3000);