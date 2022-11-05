var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users_controller')

/* GET users listing. */
router.get('/', UserController.index);

module.exports = router;
