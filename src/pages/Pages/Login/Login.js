import React from "react";
import { useState } from "react";
import "./Login.scss";
import axios from "axios";

function Login() {
  const API_URL = "http://localhost:8080/";
  const API_PATH = "login";
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("login");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formType === "login") {
      console.log(`Login attempt:`);
      axios
        .post(API_URL + API_PATH, {
          username,
          password,
        })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } else if (formType === "register") {
      console.log(`Registration attempt:`);

      axios
        .put(API_URL + API_PATH + "/register", {
          username,
          password,
        })
        .then((res) => {
          console.log("Register Successful");
        })
        .catch((error) => {
          alert(error.response.data);
        });
    }
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      {user ? (
        <div className="login-success">
          <h2>Welcome, {user} to you Fitness App!</h2>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="login-container">
          <h1 className="login-title">
            {formType === "login" ? "Login" : "Register"}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {formType === "login" ? "Login" : "Register"}
            </button>
            <div className="form-switch">
              {formType === "login" ? (
                <span>
                  <label>Don't have an account?</label>
                  <a href="#" onClick={() => setFormType("register")}>
                    Register
                  </a>
                </span>
              ) : (
                <span>
                  <label>Already have an account?</label>
                  <a href="#" onClick={() => setFormType("login")}>
                    Login
                  </a>
                </span>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
