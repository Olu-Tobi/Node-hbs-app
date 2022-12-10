var express = require('express');
var router = express.Router();
var schemas = require('../models/schemas');

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  var id = req.params.id;

  let movies = schemas.Movies;
  let movieData = await movies.findOne({_id:id}).populate('genre').exec();
  if (movieData) {
    res.render('movies', {data:movieData});
  }else{
    res.end('Invalid Request');
  }

  // if (id == '2'){
  //   res.render('movies', {
  //     title: 'Russian Dolls',
  //     img: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg',
  //     desc: "<p>A cynical young woman in New York City keeps dying and returning to the party that's being thrown in her honor on that same evening. She tries to find a way out of this strange time loop.</p><br><p>Creators Leslye Headland, Natasha Lyonne, and Amy Poehler.</p><br><p>Stars Natasha Lyonne, Charlie Barnett, and Annie Murphy.</p>"
  //   });
  // }else{
  //   res.end('Invalid Request');
  // }
});

module.exports = router;
