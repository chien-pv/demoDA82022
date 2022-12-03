const { shallowCopy } = require('ejs/lib/utils');
var express = require('express');
var router = express.Router();
var sessionCtrl = require('../controllers/session_controller');
var middwareSession = require('../middware/redirectLogin')
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',middwareSession.redirectHome, sessionCtrl.index);

router.post('/login',middwareSession.redirectHome, sessionCtrl.create); 


router.get('/logout', sessionCtrl.destroy);


module.exports = router;
