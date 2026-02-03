const express = require('express');
let cros = require('cors');
var mongoose = require('mongoose');
let enquiryRoutes = require('./app/routes/web/enquiryRoutes');
require('dotenv').config();
let app = express();

app.use(cros())
app.use(express.json());

//Routes
app.use('/api/web/enquiries', enquiryRoutes);
//localhost:3000/api/web/enquiries/insert

mongoose.connect(process.env.mongo_url)
    .then(app.listen(process.env.PORT, () => {
        console.log('Server started at port : ' + process.env.PORT);
    })).catch((err) => {
        console.log('Error in DB connection: ' + err);
    });