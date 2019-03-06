const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  itemName: {type: String},
  quantity: {type: String},
  price   : {type: Number}
})

module.exports = mongoose.model('Checklist', checklistSchema)
