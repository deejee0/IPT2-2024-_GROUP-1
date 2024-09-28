import React from "react";
import { Link } from "react-router-dom";

export default function Example() {
    return (
        <div className="Home">
            <div className="links">
                
                <Link to="/about-us">About Us</Link> <br/>
                  <Link to="/contact-us">Contact Us</Link> <br/>
                  <Link to="/Login">Login</Link> <br/>
            </div>
        
        </div>
    );
}