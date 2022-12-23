const express = require('express')
const router = express.Router()
const List = require('../models/list')

//all lists
router.get('/', async (req,res) => { 
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  try {
   const lists = await List.find(searchOptions)
   res.render('lists/index', {
     lists: lists,
   searchOptions: req.query})
  } catch {
  res.redirect('/')
}
  
})

// New list
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
  
  /*router.get('/', (req,res) => { 
  res.send('Show List ' + req.params.id)
})

router.get('/:id/edit', (req,res) => {
  res.send('Edit List ' + req.params.id)
})

router.put('/:id', (req,res) => {
  res.send('Update List ' + req.params.id)
})

router.delete('/:id', (req,res) => {
  res.send('Delete List ' + req.params.id)
})
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