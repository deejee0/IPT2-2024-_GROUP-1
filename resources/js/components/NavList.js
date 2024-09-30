import React from "react";
import { Link } from "react-router-dom";

export default function NavList() {
    return (
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/login">Login</Link>
            <Link to="/SignUp">SignUp</Link>
            <Link to="/Dashboard">Dashboard</Link>
            
        </div>
    );
}
