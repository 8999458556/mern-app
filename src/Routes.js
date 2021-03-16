import React from "react"
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import Login from "./Login"
import SignUp from "./Signup"
import Home from "./Home"
import Blogs from "./Blogs"
import Account from "./Account"
import Feed from "./Feed"

const Mern = () =>{
    return(
        <>
    <Router>
        <Switch>
            <Route exact path="/Login"><Login/></Route>
            <Route exact path="/Signup"><SignUp/></Route>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/Feed"><Feed/></Route>
            <Route exact path="/Blogs"><Blogs/></Route>
            <Route exact path="/Account"><Account/></Route>
        </Switch>
    </Router>

</>)}
export default Mern;