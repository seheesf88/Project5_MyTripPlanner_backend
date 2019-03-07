const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String},//need to add unique
  email: {type:String},
  password: {type: String}
});


module.exports = mongoose.model('User', userSchema)
