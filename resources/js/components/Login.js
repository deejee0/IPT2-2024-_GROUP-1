import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [signupData, setSignupData] = useState({ email: "", password: "" });
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const toggleForm = () => {
        const container = document.getElementById("container");
        container.classList.toggle("right-panel-active");
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setSignupData({
            email: e.target.email.value,
            password: e.target.password.value,
        });
        e.target.reset();
        toggleForm();
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.email === signupData.email && loginData.password === signupData.password) {
            alert("Login successfully");
            navigate("/dashboard");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="school-login">
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignup}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLogin}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            required 
                        />
                        <Link to="#">Forgot your password?</Link>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={toggleForm}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button className="ghost" id="signUp" onClick={toggleForm}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
