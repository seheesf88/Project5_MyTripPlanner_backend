const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  tripName: {type:String},
  destination: {type: String},
  traveler: {type: String},
  tripPeriod: {type: String},
  firstDay: {type: String},
  lastDay: {type: String},
  budget:{type: Number}
});


module.exports = mongoose.model('Plan', planSchema)
