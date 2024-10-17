const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const { authenticate } = require('../middleware/auth');

// SAVE USER TO DB
router.post("/saveUser",authenticate,async (req,res)=>{
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
router.get('/getUser/:email',async(req,res)=>{
    var userEmail = req.params.email;
    const result = await userModel.find({"email" : userEmail});
    res.status(200).send(result);
})

module.exports = router;