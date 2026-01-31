let express = require("express");
let { insertEnquiry, enqurylist, deleteEnquiry, updateEnquiry } = require("../../controllers/web/userEnquiryController");

let enquiryRoutes = express.Router();
enquiryRoutes.post("/enquiry-insert", insertEnquiry);
enquiryRoutes.get("/enquiry-list", enqurylist)
enquiryRoutes.delete("/enquiry-delete/:id", deleteEnquiry)
enquiryRoutes.put("/enquiry-update/:id", updateEnquiry)

module.exports = enquiryRoutes;