const express = require('express')
const router = express.Router()
const Item = require('.../models/item')

//all items
router.get('/', async (req,res) => { 
  res.send('All items')
})

// New item
router.get('/new', (req,res) =>{
res.send('New items')
})
  //create item
router.post('/items', async (req,res) => {
res.send('Create items')
})


module.exports = router