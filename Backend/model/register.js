const mongoose = require("mongoose");

const newUser = new mongoose.Schema({
    //firstname,lastname,email,username,password,reps,

    first_name : String,
    last_name : String,
    email:String,
    user_name:String,
    password:String,
    re_password:String,
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("register",newUser);