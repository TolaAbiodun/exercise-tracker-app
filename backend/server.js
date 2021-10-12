const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// environment variables
require('dotenv').config();

// express server
const app = express();
const port = process.env.PORT || 5000; // default

// middleware
app.use(cors());
app.use(express.json());

// create database connection
const uri = process.env.ATLAS_URI

mongoose 
 .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log('Error:' +  err));

// Add API end points from routes
const exersRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exersRouter);
app.use('/users', usersRouter);


// start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});


