let express = require("express");
let { enquiryInsert } = require("../../controller/web/enquiryController");

let enquiryRouter = express.Router();

enquiryRouter.post("/insert", enquiryInsert);
module.exports = enquiryRouter;