const express = require('express');
const cors = require('cors');

// environment variables
require('dotenv').config();

// express server
const app = express();
const port = process.env.PORT || 5000; // default

// middleware
app.use(cors());
app.use(express.json());

// create database connection

const { MongoClient } = require('mongodb');
const uri = process.env.ATLAS_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });

client.once('open', () => {
    console.log("MongoDB database connection established!")
})

// Add API end points from routes
const exersRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exersRouter);
app.use('/users', usersRouter);


// start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});


