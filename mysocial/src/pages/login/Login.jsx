import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MusaSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on MusaSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="Email" className="loginInput" />
            <input type="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="LoginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
