function index(res, rep){
    var {value, error} = schema.validate(res.body)
     
    if(error){
        rep.render("login", {title: "Home", error: error});
    } else {
        rep.render("index", {title: "Home", login: false, userName: "nguyen Van A", categories: ["A", "B", "C"]});
    }

    console.log(value);
    console.log(error);
}

module.exports = {
    index
}