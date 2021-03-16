import React , {useState} from "react"
import "./sty.css"
import { Button ,TextField} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Link,useHistory } from "react-router-dom";
import axios from "axios"
import Header from "./header"
import Footer from "./footer";



const Signup =()=>{
    const history = useHistory()
    const [user,setUser] = useState({
            Username:"",
            Password:"",
            mobile_number:"",
            email:""      
    })

    function Submit(event){
        event.preventDefault()
        axios.post("http://localhost:5000/Signup",user).then(res=>{
        console.log(res)        
      }
        )
        
       
    }
    return(
        <>

    <div className="sign-up">
        <div className="home-header">
            <Header />
        </div>        
        <div className="box" style={{padding:0}}>
            <div className="login" style={{marginTop:"-2cm"}}>     
            <h1 style={{textAlign:"center"}}>Create an Account </h1> 
                 <form action="post" onSubmit={Submit} style={{textAlign:"center"}} >
                <TextField variant="outlined" placeholder="Enter username" className="input" onChange={(e)=>{setUser({...user,Username:e.target.value})}} value={user.Username} label="Required" required/><br/>
                <TextField variant="outlined" placeholder="Enter Email" className="input"  onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email} label="Required" required={true}/><br/>        
                 <TextField variant="outlined" placeholder="Enter Mobile number" className="input"  onChange={(e)=>{setUser({...user,mobile_number:e.target.value})}} label="Required" value={user.mobile_number} required={true}/><br/>
                <TextField variant="outlined" placeholder="Enter Password" className="input"  onChange={(e)=>{setUser({...user,Password:e.target.value})}} value={user.Password}  label="Required" required={true}/><br/>
                <Button id="but" type="submit">Submit</Button>
            </form>
            </div>         
        </div>
        <div style={{position:"relative",top:"-1.2cm"}}>
            <Footer/>     
        </div>
    </div>
    </>

    )}
export default Signup;    

