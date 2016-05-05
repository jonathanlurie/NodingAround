var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/page', function(req, res) {
  res.render('page', { title: 'Loading data from the server' });
});

module.exports = router;
