const mongoose = require("mongoose")

const Schema = mongoose.Schema

const feed = new Schema ({
    dataUnderstanding:String,
    portalExperience:String,
    Didgetwhatwanted:String,
    dataUnderstanding_rating:String,
    portalExperience_rating:String,
    Didgetwhatwanted_rating:String
})
const feedback = mongoose.model("feed",feed);
module.exports = feedback;