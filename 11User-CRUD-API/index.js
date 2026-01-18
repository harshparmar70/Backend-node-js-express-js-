const express = require("express");
const app = express();
require("./db");

const User = require("./models/User");

app.use(express.json());

// CREATE USER
app.post("/users", async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ ALL USERS ✅
app.get("/users", async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ SINGLE USER
app.get("/users/:id", async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// UPDATE USER
app.put("/users/:id", async(req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
    );
    res.json(user);
});

// DELETE USER
app.delete("/users/:id", async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});