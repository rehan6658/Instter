import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { logIn, signUp } from "../../actions/AuthAction.js";

const Auth = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true);
  console.log(loading)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    username: "",
  });

  const [confirmpassword, setConfirmPassword] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpassword
        ? dispatch(signUp(data))
        : setConfirmPassword(false);
    }else
    {
      dispatch(logIn(data))
    }
  };

  const resetForm = () => {
    setConfirmPassword(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: "",
      username: "",
    });
  };
  return (
    <div className="Auth">
      {/* Left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Instter</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpassword"
                onChange={handleChange}
                value={data.confirmpassword}
              />
            )}
          </div>
          <span
            style={{
              display: confirmpassword ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Your Password doesn't match
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account? Login!"
                : "Don't have an account? Sign up"}
            </span>
          </div>

          <button className="button infoButton" type="submit" disabled={loading}>
            {loading? "Loading..." : isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
