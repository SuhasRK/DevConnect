const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const { authenticate } = require('../middleware/auth');


//GET USER BY ID
router.get('/getUser/:id',async(req,res)=>{
    var id = req.params.id;
    const result = await userModel.findById(id);
    res.status(200).send(result);
})

module.exports = router;