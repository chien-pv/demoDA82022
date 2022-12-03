const { replaceOne } = require('../models/user');
var User = require('../models/user');

function index(req, res, next) {
    res.render('session/index');
}

async function create(req, res, next) {
    var {email, pass} = req.body;
    var user = await User.findOne({email: email})
    if(!user){
        return res.render('session/index');
    }
    if(user.password != pass) {
        return res.render('session/index');
    }
    req.session.userID = user._id
    res.redirect('/')
}

function destroy(req, res, next) {
    req.session.destroy();
    res.clearCookie("ssid");
    res.redirect('/');
}


module.exports = {
    index,
    create, 
    destroy
}