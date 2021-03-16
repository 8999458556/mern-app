const express = require("express")
const router = express.Router()
const mongo = require("mongoose")
let exer = require('./model/exer')
let userDet  = require("./model/signup")
let feedback = require("./model/feedback")
const bodyParser = require("body-parser")
const csvtojson = require("csvtojson")
const url = "mongodb://127.0.0.1:27017/db"



mongo.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true,useCreateIndex:true},function(err,doc){
  if(doc!=null){console.log("connected to database")}
      })


router.get("/",(req,res)=>{
  exer.create({name:"raj"},
  function(err,doc){if(err){console.log(err);res.json(err)}
  console.log(doc)
  res.json(doc)
})     /// this is how to create document in collction exer
})

router.get("/position",(req,res)=>{
  csvtojson().fromFile("pop.csv").then(data=>{
    console.log(data)
    res.send(data)
  })
  
})

router.post("/post",function(req,res){
  var name = req.body.name;
  exer.create({name:name},(er,doc)=>{res.json(doc)}) // posting a name  from the request body

})


router.get("/find",(req,res)=>{
  exer.find({},(err,doc)=>{
    res.json(doc)
  })
})
router.post("/user",(req,res)=>{
  var name = req.body.name
  exer.findOne({name:name},(err,doc)=>{
    if(err){res.send("user not found")}
    res.json(doc)
  })

})
router.post("/update",(req,res)=>{
  exer.findOneAndUpdate({name:"ramesh"},{name:req.body.name},(err,doc)=>res.json(doc))
})
router.post("/signup",(req,res)=>{
  userDet.create({
    Username:req.body.Username,
    Password:req.body.Password,
    conpassword:req.body.conpassword,
    mobile_number:req.body.mobile_number,
    email:req.body.email,
},(err,doc)=>{
  if(err){res.json(err)}
  res.json(doc)
})
})
router.get("/signdata",(req,res)=>{
  userDet.find({},(err,doc)=>{
    res.json(doc)
  })
})
router.get("/signdata/:id",(req,res)=>{
  userDet.findById(req.params.id,(err,doc)=>{res.json(doc)})})

router.post("/Login",(req,res)=>{
  userDet.find({Username:req.body.Username,Password:req.body.Password},(err,doc)=>{
    if(err){res.send("data not found")}
    res.send(doc)

  })
})

router.post("/Account",(req,res)=>{
  userDet.create({
    Username:req.body.Username,
    Password:req.body.Password,
    mobile_number:req.body.mobile_number,
    email:req.body.email,
  },(eer,doc)=>{
    res.send(doc)
  })  
})
router.post("/Feedback",(req,res)=>{
  feedback.create({
    dataUnderstanding:req.body.dataUnderstanding,
    portalExperience:req.body.portalExperience,
    Didgetwhatwanted:req.body.Didgetwhatwanted,
    dataUnderstanding_rating:req.body.dataUnderstanding_rating,
    portalExperience_rating:req.body.portalExperience_rating,
    Didgetwhatwanted_rating:req.body.Didgetwhatwanted_rating
  },(eer,doc)=>{
    res.json(doc)
    console.log(doc)
  })

})
  
module.exports = router;