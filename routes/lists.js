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
  
router.post('/', async (req,res) => {
  const list = new List({
    name: req.body.name
  })
  try {
    const newList = await list.save()
    //res.redirect(`lists/${newList.id}`)
      res.redirect(`lists`)
    
  } catch {
    res.render('lists/new', {
        list: list,
        errorMessage: 'Error creating List. Try Again.'
      })
  }
  /*list.save((err, newList) => {
    if (err) {
      console.log(err)
      res.render('lists/new', {
        list: list,
        errorMessage: 'Error creating List. Try Again.'
      })
    } else {
      //res.redirect(`lists/${newList.id}`)
      res.redirect(`lists`)
    }
  }
)*/})

/*router.post('/', (req, res, next) => {
  const list = new List({
    name: req.body.name
  })
  console.log(list)
  list.save((err, newList) => {
    if (err) {
      console.log(err)
      return next(err) // Pass the error to the next middleware
    } else {
      res.redirect(`lists`)
    }
  }
)})*/

module.exports = router