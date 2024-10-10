import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.email === "darwin@veritas.edu.com" && loginData.password === "admin") {
            alert("Login successfully");
            navigate("/dashboard");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="unique-login-page">
            {/* Smoke Animation Div */}
            <div className="smoke-animation"></div>

            {/* Login Container */}
            <div className="unique-login-container">
                <form onSubmit={handleLogin} className="unique-login-form">
                    <img
                        src="https://pbs.twimg.com/media/GZb0u-uasAIQVPD?format=png&amp;name=360x360"
                        alt="Logo"
                        className="login-logo"
                    />
                    <h1>Login to Dashboard</h1>

                    <input
                        type="email"
                        placeholder="Username"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                    />

                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <div className="unique-login-options">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="#">Forgot your password?</Link>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
