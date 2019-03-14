const mongoose = require('mongoose');

const itemListSchema = new mongoose.Schema({
  itemName: {type: String},
  quantity: {type: Number},
  price   : {type: Number},
  dividBy : {type: Number},
  total   : {type: Number},
  planId  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan'
  },
  userId  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan'
  }
})

module.exports = mongoose.model('ItemList', itemListSchema)
