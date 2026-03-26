const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbconnet = require("./Database/db");
const dbconnect = require("./Database/db");
const route = require("./routes/user")

//make app
const app = express();
app.use(cors());
app.use(express.json());
app.use(route)

dbconnect()



app.listen(3000,() => {
    console.log("Server is connect..")
})