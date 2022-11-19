var express = require('express');
const { validate, estimatedDocumentCount } = require('../models/user');
var router = express.Router();
/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



// Client ------ MD1 - MD2- --------> Server 

// - validate
// - Edit 