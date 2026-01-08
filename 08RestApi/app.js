const express = require('express');
const app = express();

app.use(express.json()); // required for POST

let users = [];

/* GET route */
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

/* POST route */
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);
    res.status(201).json({
        message: 'User created',
        user: newUser
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});