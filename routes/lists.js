const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
  res.render('lists/index')
  //res.send('hello')
})

router.get('/new', (req,res) =>{
  res.render('lists/new')
})
  
router.post('/', (req,res)=> {
  res.send('Create')
})

module.exports = router