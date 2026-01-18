const mongoos = require("mongoose");

mongoos.connect("mongodb://localhost:27017/userDB")
    .then(() => console.log("mongo Db connected"))
    .catch((err) => console.log(err))