const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  date    : {type: String},
  mustDo  : {type: String},
  mustEat : {type: String},
  mustSee : {type: String},
  hotel   : {type: String},
  howLong : {type: String},
  memo    : {type: String},
})

module.exports = mongoose.model('Itinerary', itinerarySchema)
