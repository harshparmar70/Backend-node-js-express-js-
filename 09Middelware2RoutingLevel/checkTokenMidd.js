let chackToken = (req, res, next) => {
    if (req.query.token == "" || req.query.token == undefined) {
        return res.send({
            status: 0,
            msg: "please File the token"
        })
    }
    if (req.query.token != process.env.mytoken) {
        return res.send({
            status: 0,
            msg: "please File the currect token"
        })
    }
    next()
}
module.exports = { chackToken };