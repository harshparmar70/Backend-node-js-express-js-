 let enquryModel = require("../../models/enqury.model");

 let insertEnquiry = (req, res) => {
     let { sname, semail, smessage, sphoneNo } = req.body;
     // console.log(sname, semail, smessage, sphoneNo);
     let enqury = enquryModel({
         name: sname,
         email: semail,
         phone: sphoneNo,
         message: smessage
     })
     enqury.save().then(() => {
         res.send({
             status: 1,
             message: "Enqury saved Successfully"
         })
     }).catch((err) => {
         res.send({ status: 0, message: err.message })
     })

 }

 let enqurylist = async(req, res) => {

     let enqurylist = await enquryModel.find()
     res.status(200).json({ status: 200, message: "Success", Data: enqurylist })
 }

 let deleteEnquiry = async(req, res) => {
     let enquiryId = req.params.id;
     console.log(enquiryId);

     let DeleteEnquiry = await enquryModel.deleteOne({ _id: enquiryId })

     res.send({ status: 0, message: "Delete Api", id: enquiryId, delResponse: DeleteEnquiry })
 }

 let updateEnquiry = async(req, res) => {
     let enquiryId = req.params.id;
     let { sname, semail, smessage, sphoneNo } = req.body;
     let UpdateObj = {
         name: sname,
         email: semail,
         phone: sphoneNo,
         message: smessage,
     }
     let UpdateEnquiry = await enquryModel.updateOne({ _id: enquiryId }, UpdateObj)
     res.send({ status: 0, message: "Update Api", id: enquiryId, update: UpdateEnquiry })
 }

 module.exports = { insertEnquiry, enqurylist, deleteEnquiry, updateEnquiry }