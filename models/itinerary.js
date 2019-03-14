const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  date    : {type: String},
  mustDo  : {type: String},
  mustEat : {type: String},
  mustSee : {type: String},
  hotel   : {type: String},
  memo    : {type: String},
  sortByDate: Number,
  planId  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan'
  },
  userId  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan'
  }
})

module.exports = mongoose.model('Itinerary', itinerarySchema)
