const http = require("http");
const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {

    if (req.url == ("/")) {
        let obj = {
            status: 1,
            data: [{
                    newstitle: "ws",
                    newsdes: 'ws hello'
                },
                {
                    newstitle: "IIp",
                    newsdes: 'IIp hello'
                }
            ]
        }
        res.end(JSON.stringify(obj))
    }
    if (req.url == "/news") {
        res.end("welcom to news page")
    }
    if (req.url == "/about") {
        res.end("welcom to about page")
    }

})

server.listen(3000)