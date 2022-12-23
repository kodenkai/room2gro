const express = require('express')
const router = express.Router()
const Item = require('../../models/item')
const List = require('../../models/list')

//all items
router.get('/', async (req,res) => { 
  res.send('All Items')
})

// New item
router.get('/new', async (req,res) =>{
try {
    const lists = await List.find({})
    const item = new Item()
    res.render('lists/items/new', {
      items: item,
      lists: lists
    })
  } catch {
    res.redirect('/lists')
  }
})
  //create item
router.post('/', async (req,res) => {
res.send('Create items')
})


module.exports = router