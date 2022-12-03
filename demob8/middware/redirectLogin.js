function redirectLogin(req, res, next){
    if(req.session.userID){
        next();
    } else {
        res.redirect('/login')
    }
}

function redirectHome(req, res, next){
    if(req.session.userID){
        res.redirect('/')
    } else {
        next();
    }
}

module.exports = {redirectLogin, redirectHome};