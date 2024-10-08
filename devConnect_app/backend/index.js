require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const userModel = require('./models/userModel');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors()) // Use this after the variable declaration

const URL = process.env.DATABASE_URL;

mongoose.connect(URL).then(()=>{
    console.log('Connection successful!!!');
})
.catch((err)=>{
    console.log('No connection',err);
})

// SAVE USER
app.post("/saveUser",async (req,res)=>{
    var user = new userModel;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName? req.body.lastName : "";
    user.email = req.body.email;
    user.userName = req.body.userName;
    user.password = req.body.password;
    await user.save().then(()=>{
        res.status(200).send({"status" : "success"});
    }).catch((err)=>{
        res.status(500).send({"message" : err});
    });
})

//GET USER BY EMAIL
app.get('/getUser/:email',async(req,res)=>{
    var userEmail = req.params.email;
    const result = await userModel.find({"email" : userEmail});
    res.status(200).send(result);
})



app.listen(3000,() => console.log("Server listening at port 3000"));