let loginModule = require("../models/login.module");

let loginInsert = (req, res) => {
    let { email, password } = req.body;
    let dataModule = loginModule({ email, password });
    dataModule.save().then(() => {
            res.json({ status: 1, message: "Data inserted successfully", data: { email, password } });
        })
        .catch((err) => {
            res.json({ status: 0, message: "Data insert is Faill", data: err });
        })

};

module.exports = { loginInsert };