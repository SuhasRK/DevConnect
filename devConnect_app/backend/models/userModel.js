const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required : true, trim : true},
    lastName: String,
    email : {type: String, required : true, trim : true},
    userName : {type: String, required : true, trim : true},
    password : {type: String, required : true, trim : true},
});

module.exports = mongoose.model ('User',userSchema);