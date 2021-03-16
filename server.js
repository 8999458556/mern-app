const express = require("express")
const app = express()
const cors = require("cors")
const router = require('./rou')


app.use(cors())
app.use(express.json())
app.use("/",router)

app.listen(5000,()=>{
    console.log("connected")
})