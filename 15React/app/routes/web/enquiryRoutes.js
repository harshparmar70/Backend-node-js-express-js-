let express = require("express");
let { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require("../../controller/web/enquiryController");

let enquiryRouter = express.Router();

enquiryRouter.post("/insert", enquiryInsert);
enquiryRouter.get("/view", enquiryList)
enquiryRouter.delete("/delete/:id", enquiryDelete)
enquiryRouter.get("/get/:id", enquiryUpdate)

module.exports = enquiryRouter;