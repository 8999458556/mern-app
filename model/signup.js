const { ObjectID } = require("bson");
const mongoose  = require("mongoose")

const Schema = mongoose.Schema

const Signup = new Schema({
    Username:String,
    Password:String,
    mobile_number:String,
    email:String,
})

const userDet = mongoose.model("signup",Signup)

module.exports = userDet;