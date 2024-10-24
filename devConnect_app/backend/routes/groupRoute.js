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

module.exports = router;