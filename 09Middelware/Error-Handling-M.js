const express = require('express');
const app = express();

app.get('/error', (req, res, next) => {
    throw next(Error("Something went wrong!"));
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(3000);