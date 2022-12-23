const express = require('express')
const router = express.Router()
const Item = require('../../models/item')
const List = require('../../models/list')

//all items
router.get('../:id', async (req,res) => { 
  res.send('Show Items ' + req.params.id)
})

router.get('../:id/edit', (req,res) => {
  res.send('Edit Item ' + req.params.id)
})

router.put('../:id', (req,res) => {
  res.send('Update Item ' + req.params.id)
})

router.delete('../:id', (req,res) => {
  res.send('Delete Item ' + req.params.id)
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