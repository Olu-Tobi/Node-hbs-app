var express = require('express');
var router = express.Router();
var schemas = require('../models/schemas');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let movies = schemas.Movies;

  let moviesResult = await movies.find({}).exec((err, moviesData) => {
    if (moviesData) {
      res.render('index', {title: 'Netflix Clone', data:moviesData, email: ''})
    }
  })

});

router.post('/signup', async (req, res) => {
  const em = req.body.emailInput;
  
  let signup = schemas.Signup;
  let signupExist = await signup.findOne({email:em}).exec( async (err, result) => {
    if (!result){
      let newEmail = new schemas.Signup({email:em});
      let saveEmail = await newEmail.save( (err, emailResult) => {})
    }
  })

  let movies = schemas.Movies;

  let moviesResult = await movies.find({}).exec((err, moviesData) => {
    if (moviesData) {
      res.render('index', {title: 'Netflix Clone', data:moviesData, email:em})
    }
  })

})

module.exports = router;
