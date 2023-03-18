import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, saveUser } from "../utils";
import { useData, SET_USER } from "../context";
import '../styles/Register.css'
import LogoutUser from "../compononet/LogoutUser";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    password: "",
    email: "",
  });

  const {
    state: { user: currentUser },
    dispatch,
  } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUserExist = getUser(user.mobile) || getUser(user.email);
    if (isUserExist) {
      alert(`User already exist`);
      return;
    }
    saveUser(user);
    dispatch({ type: SET_USER, payload: user });
    navigate("/home");
  };

  const handleInput = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="register-container">
      {currentUser ? (
        <>
          <p>Welcome {currentUser.name}</p>
          <LogoutUser />
        </>
      ) : (
        <div className="container-box">
          <p className="heading">Create Your Account!</p>

          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Enter Your Email..."
                name="email"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div className="name">
              <label htmlFor="email">Name : </label>
              <input
                type="text"
                id="name"
                className="input"
                placeholder="Enter Your Name..."
                name="name"
                value={user.name}
                onChange={handleInput}
              />
            </div>

            <div className="mobile">
              <label htmlFor="mobile">Mobile : </label>
              <input
                type="number"
                id="mobile"
                className="input"
                placeholder="Enter Mobile No..."
                name="mobile"
                value={user.mobile}
                onChange={handleInput}
              />
            </div>

            <div className="form">
              <label htmlFor="pasword">Password : </label>
              <input
                type="password"
                id="pasword"
                className="input"
                placeholder="Enter Password..."
                name="password"
                value={user.password}
                onChange={handleInput}
              />
            </div>

            <button>Register</button>
          </form>

          <p className="common-para">
            Already have an account with us? <Link to="/">Login </Link> here
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
