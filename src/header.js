import React from "react"
import "./sty.css"
import {Link} from "react-router-dom"

const Header = ()=>{

    return(
        <>
        <div className="header">
           <div className="head-comp-1">
                <Link to="/" style={{textDecoration:"none"}}><div className="ok"><h1>Covid-T</h1></div></Link> 
                </div>
            <div className="head-comp-2">
        <ul>
                <li>
                <Link to="/Login" style={{color:"white",textDecoration:"none"}}> Login </Link>    
                </li>
                <li>
                <Link to="/Signup" style={{color:"white",textDecoration:"none"}}> Account </Link>    
                </li>
                <li>
                <Link to="/Blogs" style={{color:"white",textDecoration:"none"}}> Blogs </Link>    
                </li>
                <li>
                <Link to="/Feed" style={{color:"white",textDecoration:"none"}}> Feedback </Link>    
                </li>
            </ul>
        </div>
        </div>
        </>
    )

}
export default Header;
