const mongoose = require('mongoose');

const itemListSchema = new mongoose.Schema({
  itemName: {type: String},
  quantity: {type: Number},
  price   : {type: Number},
  dividBy : {type: Number},
  total   : {type: Number}
})

module.exports = mongoose.model('ItemList', itemListSchema)
