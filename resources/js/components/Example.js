import React from "react";
import { Link } from "react-router-dom";


export default function Example() {
    return (
        <div className="Home">
            {/* Welcome message */}
            <h1 className="welcome-message">WELCOME TO HEREVERD UNIVERSITY</h1>

            {/* Links section */}
            <div className="links">
                <Link to="/about-us">About Us</Link> <br />
                <Link to="/contact-us">Contact Us</Link> <br />
                <Link to="/login">Login</Link> <br />
            </div>
        </div>
    );
}
