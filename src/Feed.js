import React,{useState} from "react"
import Header from "./header"
import Footer from "./footer"
import{Button, TextField}from "@material-ui/core"
import ReactStar from "react-rating-stars-component"
import axios from "axios"

const Feed = ()=>{
    const[feedback,setfeedback]=useState({
        dataUnderstanding:"",
        portalExperience:"",
        Didgetwhatwanted:"",
        dataUnderstanding_rating:"0",
        portalExperience_rating:"0",
        Didgetwhatwanted_rating:"0"

    })
    const feedSub = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/Feedback",feedback).then((res)=>{
            console.log(res)

        })
    }

    return(
        <>
        <div><Header/></div>
        <div className="feed-head">
            <span style={{boxSizing:"border-box",position:"relative", fontSize:"1cm",padding:10,left:"6cm",top:"0.4cm",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Feedback</span>
        </div>
       <form onSubmit={feedSub}>
        <div className="feed">
            <div className="feed-1">
            <h2>Data understanding</h2>
            <ReactStar count={5} onChange={(e)=>{setfeedback({...feedback,dataUnderstanding_rating:e})}} size={45}/>
            <TextField multiline variant="outlined" placeholder="Leave your comments" className="feed" id="feed-box" onChange={(e)=>{setfeedback({...feedback,dataUnderstanding:e.target.value})}} value={feedback.dataUnderstanding}/>
            </div>     
            <div className="feed-1">
            <h2>Portal Experience</h2>
            <ReactStar count={5} onChange={(e)=>{setfeedback({...feedback,portalExperience_rating:e})}} size={45}/>
            <TextField multiline variant="outlined" placeholder="Leave your comments" className="feed" id="feed-box" onChange={(e)=>{setfeedback({...feedback,portalExperience:e.target.value})}} value={feedback.portalExperience}/>
            </div>     
            <div className="feed-1">
            <h2>Did you get what you want?</h2>
            <ReactStar count={5} onChange={(e)=>{setfeedback({...feedback,Didgetwhatwanted_rating:e})}} size={45}/>
            <TextField multiline variant="outlined" placeholder="Leave your comments" className="feed" id="feed-box" onChange={(e)=>{setfeedback({...feedback,Didgetwhatwanted:e.target.value})}} value={feedback.Didgetwhatwanted}/>
            </div> 
            <Button type="submit" style={{backgroundColor:"red",padding:15,marginTop:10,color:"whitesmoke"}}>Submit Feedback</Button>    

        </div>
        </form> 
        <div style={{position:"fixed",bottom:0,width:"100%"}}>
                <Footer/>
            </div>
        
        </>
    )

}
export default Feed;
