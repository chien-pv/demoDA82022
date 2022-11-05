const Joi = require('joi');

var schema = Joi.object({
    firstname: Joi.string().min(3).max(100),
    lastname: Joi.string().min(3).max(300),
    country: Joi.string().min(3),
    subject: Joi.string().min(3)
})

function contact(res, rep){
    var  data = res.body
    var {value, error} = schema.validate(data);
    if(error){
        rep.render("contact"); 
    } else {
        rep.render("index");
    }

}

module.exports = {
    contact
}