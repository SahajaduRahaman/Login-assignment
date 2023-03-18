import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyUser } from "../utils";
import { useData, SET_USER } from "../context";
import LogoutUser from "../compononet/LogoutUser";
import '../styles/Login.css'

const Login = () => {
  const navigate = useNavigate();

  const {
    state: { user },
    dispatch,
  } = useData();

  const [userLogin, setUserLogin] = useState({
    mobile: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUser = verifyUser(userLogin.mobile, userLogin.password);
    if (!isUser) {
      alert("User does not exist");
      return;
    }
    dispatch({ type: SET_USER, payload: isUser });
    alert("Login Successfull");
    navigate("/home");
  };

  return (
    <div className="login-data">
      {user ? (
        <>
          <p>Welcome {user.name}</p>
          <LogoutUser />
        </>
      ) : (
        <div className="login-box">
          <p className="header">Log In Form</p>

          <form onSubmit={handleSubmit}>
            <div className="form">
              <label htmlFor="email" className="form__label">
                Phone :{" "}
              </label>
              <input
                type="text"
                id="mobile"
                className="input"
                placeholder="Enter Mobile or Email"
                name="mobile"
                value={userLogin.mobile}
                onChange={handleInput}
              />
            </div>

            <div className="password">
              <label htmlFor="pasword">Password : </label>
              <input
                type="text"
                id="pasword"
                className="input"
                placeholder="Enter Password"
                name="password"
                value={userLogin.password}
                onChange={handleInput}
              />
            </div>

            <button>Submit</button>
          </form>

          <p className="common-para">
            Don't have account yet? <Link to="/register"> Sign Up </Link> here
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
