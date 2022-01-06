require("dotenv").config(); // dotenv help maintain it security
const { MongoClient } = require("mongodb");

const connection = async (crudFunc, movieObj) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI) // store it new mongo client, takes connection string as argument, to connect to server
        await client.connect(); // witing for connection
        const db = client.db("moviesM32"); // creating db
        const collection = db.collection("Movies"); // creating collection part of db
        await crudFunc(collection, movieObj); //
        client.close(); // switching off connection

    } catch (error) {
        console.log(error);
    }

};

module.exports = connection;

// console.log(process.env.MONGO_URI)
// console.log(process.env.A_TEST_LINE)
// // function connect to database (process.env.MONGO_URI);


