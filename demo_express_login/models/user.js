const mongoose = require('mongoose');

var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: { type: String,  default: "abc"},
    email: { type: String},
    phone: {type: Number},
    password: {type: String}
})

var UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel