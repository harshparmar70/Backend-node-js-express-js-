require("../../models/enquiry");
let enquiryInsert = (req, res) => {
    let { name, email, phone, message } = req.body;

    let newEnquiry = enquiryModel({
        name: name,
        email: email,
        phone: phone,
        message: message
    });

    newEnquiry.save().then(() => {
        res.status(200).json({ message: "Enquiry submitted successfully" });
    }).catch((err) => {
        res.status(500).send({ message: "Enquiry not Submitted", error: err.message });
    })
}



module.exports = { enquiryInsert };