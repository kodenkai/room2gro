const express = require('express')
const router = express.Router()
const List = require('../models/list')

router.get('/', (req,res) =>{
  res.render('lists/index')
  //res.send('hello')
})

router.get('/new', (req,res) =>{
  res.render('lists/new', {list: new List() })
})
  
router.post('/', (req,res) => {
  console.log('hi')
  res.send('req.body.lis')
})

module.exports = router