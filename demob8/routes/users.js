var express = require('express');
var router = express.Router();
var middwareSession = require('../middware/redirectLogin')

/* GET users listing. */
router.get('/', middwareSession.redirectLogin, function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
