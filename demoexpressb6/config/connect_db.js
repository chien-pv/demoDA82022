const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/demob6');
        console.log("DB connected!!!");
    } catch (error) {
        console.log("DB not connect!!!");
    }
    
}

module.exports = {connect}