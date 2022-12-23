const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('List', listSchema)