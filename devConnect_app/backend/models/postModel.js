const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required : true},
    mainData: {type: String, required : true},
    userId : {type: String, required : true},
    imagePath : {type: String},
    filePath : {type: String},
    likeCount : {type : Number},
    comments : {type: [String]} // array of strings
    
},{ timestamps: true });

module.exports = mongoose.model ('Post',postSchema);