const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String},
    email: {type: String}, 
    password: {type: String}
})

var userModel = mongoose.model("user", userSchema);

module.exports = userModel;