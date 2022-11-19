var User = require('../models/user');
async function index(req, res, next) {
    var users = await User.find({});
    var user = await User.findById("63660d9f05de6899afc69f75")
    console.log(user);
    res.render('users/index', {users});
}

module.exports = {
    index 
}