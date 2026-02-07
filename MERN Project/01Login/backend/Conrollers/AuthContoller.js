const userModel = require("../Models/User");
const bcrypt = require("bcrypt");
const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            return user.status(409)
                .json({ status: 0, message: "User is already exist ,you can login" });
        }

        let userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                status: 1,
                message: "signup Successfully"
            });
    } catch (error) {
        res.status(500)
            .json({
                status: 0,
                message: "signup Successfully"
            });
    }
    res.send({ status: 1, message: "Signup Success" })
}

const login = async(req, res) => {
    res.send({ status: 1, menubar: "login Success" })
}

module.exports = { signup, login };