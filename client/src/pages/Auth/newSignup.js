import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// we can use updateProfile for setting name and other things...
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
// import "./newSignup.css";
const NewSignup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState("");
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!value.name || !value.email || !value.password) {
      setError("Please Fill the details !!!");
    }
    setError("");

    // doing button disabled
    setButtonDisabled(true);
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async (response) => {
        setButtonDisabled(false);
        const user = response.user;
        await updateProfile(user, {
          displayName: value.name,
        });
        // after completion of the signup we can redirect to...

        navigate("/login");
      })
      .catch((error) => {
        // after we have received the data we have to set button disabled to abled
        setButtonDisabled(false);
        setError(error.message);
      });
  };

  return (
    <div className="Signup">
      <div className="signInfo">
        <h1 className="signup_header">Signup</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          onChange={handleChange}
          value={value.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          onChange={handleChange}
          value={value.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          onChange={handleChange}
          value={value.password}
        />

        <div className="footer">
          <span className="error">{error}</span>
          <button onClick={handleSignup} disabled={buttonDisabled}>
            Signup
          </button>
          <p>
            Already have any account?{" "}
            <span>            
              <NavLink exact to="/login">
                Login
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewSignup;