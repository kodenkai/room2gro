const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  currentList: {
    type: [mongoose.Schema.Types.ObjectId],
    ref:'Item'
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('List', listSchema)