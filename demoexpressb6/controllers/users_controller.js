var User = require('../models/user')

async function index (req, res, next) {
    var users = await User.find({});
    console.log(users);
    res.render("users/index", {name: "Nguyen Van A", users});
}

module.exports = {
    index
}