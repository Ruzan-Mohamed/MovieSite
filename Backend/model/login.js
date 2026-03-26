const mongoose = require("mongoose");

const newLogin = new mongoose.Schema({
    user_pass:String,
    password:String,
    date:{
        type:Date,
        default:Date.now
        
    }
})


module.exports = mongoose.model("login",newLogin)