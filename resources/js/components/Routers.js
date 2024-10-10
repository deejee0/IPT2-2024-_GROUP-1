import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Example from "./Example";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp"; // Import the SignUp component
import Enlistment from "./Enlistment"; // Make sure this matches your file name exactly
import Students from "./Students"; // Make sure this matches your file name exactly

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Example />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/enlistment" element={<Enlistment />} /> {/* Lowercased path */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/students" element={<Students />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
