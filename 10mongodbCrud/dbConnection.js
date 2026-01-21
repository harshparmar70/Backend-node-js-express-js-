const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
let dbConnectionURL = "mongodb://localhost:27017"
const client = new MongoClient(dbConnectionURL);

let dbName = "myProject"
let dbConnection = async() => {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db
}

module.exports = { dbConnection }