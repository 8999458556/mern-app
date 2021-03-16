import React,{useState} from "react"
import{Link,useHistory} from "react-router-dom"
import {Button, TextField} from "@material-ui/core"
import Header from "./header"
import Footer from "./footer"
import axios from "axios"


const Login =()=>{
    let history = useHistory()
    const [user,setUser] = useState({
        Username:"",
        Password:"",   
})

function his(){
    history.push("/Signup")
}

    const sub = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/Login",user).then(res=>{
            console.log(res)
            console.log(res.data)
        })
    }
    return(
        <>
    <div className="sign-up">
        <div className="home-header">
            <Header/>

        </div>
        <div className="box" >
        <div className="login">
            <h1 style={{textAlign:"center"}}>Login </h1>
            <form action="post" onSubmit={sub} style={{textAlign:"center"}}>
                <TextField variant="outlined" placeholder="Enter username" helperText="" className="input"  onChange={(e)=>{setUser({...user,Username:e.target.value})}} value={user.Username}/><br/>
                <TextField variant="outlined" placeholder="Enter Password" helperText="" className="input"  onChange={(e)=>{setUser({...user,Password:e.target.value})}} value={user.Password}/>
                <Button id="but" type="submit">Submit</Button><br/>
                <Button id = "but" onClick={his}> Create acoount</Button>
                </form>
            </div>
          </div>  
            <div style={{position:"fixed",bottom:0,width:"100%"}}>
                <Footer/>
            </div>
    
    
    </div>

    </>

    )

}
export default Login;