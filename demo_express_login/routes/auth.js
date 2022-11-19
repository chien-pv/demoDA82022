var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth_controller')

router.get('/login', authController.index);
router.post('/login', authController.create);

module.exports = router;
