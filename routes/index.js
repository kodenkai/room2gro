const express = require('express')
const router = express.Router()
const List = require('../models/list')

router.get('/', async (req,res) =>{
  let lists
  try {
    lists = await List.find().sort({ createdAt: 'desc'}).limit(10).exec()
  } catch {
    lists = []
  }
  res.render('index', {lists: lists})
  //res.send('hello')
})

module.exports = router