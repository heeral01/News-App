import React from "react";
import {Link}  from "react-router-dom";
import "./navbar.css"
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-child-1">
                <img className="nav-img"src="../b.png" alt="logo" /><p>News Paper</p>
            </div>
            <div className="navbar-child-2">
                 <Link  className='nav-links' to ="/">HOME</Link>
                 <Link  className='nav-links' to ="/about">ABOUT</Link>
                 <Link  className='nav-links' to ="/contact">CONTACT</Link>

            </div>
            <div className="navbar-child-3">
                 <Link className="form-btn" to="/form">user Details</Link>
            </div>
        </div>

    )
}