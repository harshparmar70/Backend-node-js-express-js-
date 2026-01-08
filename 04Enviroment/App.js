// app.js 

const express = require('express')
const app = express();
const dotenv = require('dotenv')

// dot env config
dotenv.config()
const PORT = process.env._PORT;
const API_KEY = process.env.API_KEY
const ACCESS_TOKEN = process.env.ACCESS_TOKEN


// use these variable according to your nedd 

// Server 
app.listen(PORT, () => {
    console.log(`Server is Running on PORT No.  ${PORT}.`)
})