const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  qty: {
  type: 
}
})

module.exports = mongoose.model('List', itemSchema)