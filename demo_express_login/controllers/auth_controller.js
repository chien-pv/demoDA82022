var User = require('../models/user');
async function index(req, res, next) {
    res.render('auth/index');
}

async function create(req, res, next) {
    console.log(req.body);

    var user = await User.findOne({email: req.body.uname})
    
    if(!user){
        res.render('auth/index');
        return;
    }

    if(user.password != req.body.psw){
        res.render('auth/index');
        return;
    }
    console.log(user);
    res.render('index');
}

module.exports = {
    index,
    create
}