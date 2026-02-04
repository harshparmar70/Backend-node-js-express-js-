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

let enquiryList = async(req, res) => {
    let enquiry = await enquiryModel.find();
    res.send({ status: 1, enquiry: enquiry });
    console.log(enquiryList);

}

let enquiryDelete = async(req, res) => {
    let enid = req.params.id;
    let enquiryDelete = await enquiryModel.deleteOne({ _id: enid }).catch((err) => {
        console.log(err);
    })
    res.send({ status: 1, message: "Enquiry Delete Successfully", enquiry: enquiryDelete });
}

let enquiryOne = async(req, res) => {
    let enid = req.params.id;
    let enquiryRow = await enquiryModel.find({ _id: enid })
    res.send({ status: 1, message: "Id selected", enquiry: enquiryRow })
}
let enquiryUpdate = async(req, res) => {
    let { name, email, phone, message } = req.body;


    let enid = req.params.id;
    let update = await enquiryModel.updateOne({ _id: enid }, {
        $set: {
            name,
            email,
            phone,
            message
        }
    });
    res.send({ status: 1, message: "Id selected", enquiry: update })
}

module.exports = { enquiryInsert, enquiryList, enquiryDelete, enquiryOne, enquiryUpdate };