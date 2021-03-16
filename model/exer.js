let mongoose = require("mongoose")

const user = new mongoose.Schema({ 
    name: String
})

let exer = mongoose.model("mydbs",user)//user model

module.exports = exer;