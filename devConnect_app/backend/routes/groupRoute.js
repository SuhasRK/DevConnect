const express = require('express');
const Group = require('../models/groupModel')
const router = express.Router();

// Create a new group
router.post('/createGroup',(req, res) => {
    const { groupName,description,adminId } = req.body;

    const newGroup = new Group({
        groupName,
        description,
        adminId
    });

    newGroup.save()
    .then(() => res.send({message: 'success'}))
    .catch(err => res.status(500).send('Error saving data: ' + err));
  
});

router.get('/getGroups',(req,res)=>{
    Group.find() // Fetch all documents from the Upload collection
    .then(groups => res.json(groups)) // Send the uploads as a JSON response
    .catch(err => res.status(500).send('Error retrieving data: ' + err)); // Handle errors
})

router.get('/getGroupById',(req,res)=>{
    const {adminId} = req.query;
    Group.find({adminId}) // Fetch all documents from the Upload collection
      .then(groups => res.json(groups)) // Send the uploads as a JSON response
      .catch(err => res.status(500).send('Error retrieving data: ' + err)); // Handle errors
  })

module.exports = router;