const mongoose = require("mongoose")

const dbconnect = async() =>{
    try{
    const db = await mongoose.connect("mongodb+srv://menuka2004825_db_user:UW4ywkHYMoicL4eq@cluster0.3jdmn8q.mongodb.net/movienest?appName=Cluster0");
    console.log("Db connect successfull.")
    }
    catch(error){
        console.log("Error" + error.message)
    }
}

module.exports = dbconnect;