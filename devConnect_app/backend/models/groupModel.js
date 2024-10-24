const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupName: {type: String, required : true},
    description: {type: String, required : true},
    adminId : {type: String, required : true},
    members : {type: [String]} // array of strings
    
},{ timestamps: true });

module.exports = mongoose.model ('Group',groupSchema);