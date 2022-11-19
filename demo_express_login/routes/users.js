var express = require('express');
var router = express.Router();
var userController = require('../controllers/user_controller')

/* GET users listing. */
router.get('/', userController.index);

module.exports = router;
