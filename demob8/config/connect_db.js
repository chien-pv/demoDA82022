const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect("mongodb://localhost:27017/demo8")
        console.log("DB Connected!!")
    } catch (error) {
        console.log("DB not Connect!!")
    }
    
}
module.exports = {connect};