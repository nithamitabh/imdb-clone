import React from "react";
import "./header.css"
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div className="header">
            <div className="headerleft">
               <Link to = "/" ><img className="header_icom" src="" alt="" /></Link>
               <Link to = "/movies/popular" >Popular</Link>
               <Link to = "/movies/top_rated" >Top Rated</Link>
               <Link to = "/movies/upcoming" >Upcoming</Link>

            </div>
        </div>
    )
}
export default Header;