const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required : true},
    lastName: {type: String, required : true},
    email : {type: String, required : true, unique : true},
    userName : {type: String, required : true},
    password : {type: String, required : true},
    
},{ timestamps: true });

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
  
    try {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(user.password, salt);
      next();
    } catch (error) {
      return next(error);
    }
  });
  
// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (givenPass) {
    return bcrypt.compare(givenPass, this.password);
};

module.exports = mongoose.model ('User',userSchema);