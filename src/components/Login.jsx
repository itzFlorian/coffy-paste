import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { host } from "../api/Routes.jsx";

import UserContext from "../context/userContext.jsx";


// images
import bg from "../images/coffypaste_bg_568217968.png";
import avatar from "../images/coffypaste_icon_avatar.png";
import coffee from "../images/coffypaste_icon_coffee_default.png";
import community from "../images/coffypaste_icon_community.png";
import searchL from "../images/coffypaste_icon_search_l.png";
import searchS from "../images/coffypaste_icon_search_s.png";
import shop from "../images/coffypaste_icon_shop.png";
import stats from "../images/coffypaste_icon_stats.png";
import logoM from "../images/coffypaste_logo_900.png";
import logoL from "../images/coffypaste_logo_2352.png";
import efjm from "../images/efjm_logo.png";
// - - - - - - - - -

const INITIAL = {
  email: "",
  password: "",
};

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  theme: "dark",
};

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(INITIAL);
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const handleInput = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = async () => {
      await fetch(`${host}/users/login`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => {
          if (data.error) {
            toast.error("wrong email or password!", toastOptions);
          }
          if (data.message) {
            navigate("/");
          }
        });
    };
    sendData();
  };

  return (
    <>
      <div className="flex relative">
        <div className="bg"></div>
      </div>

      <div className="logoM-container">
        <img src={logoM} alt="logo" />
      </div>

      <div className="rotate">
        <h1 className="center">log in to my account</h1>
      </div>

      <div className="login-container">
        <div className="text"></div>
        <div className="form">
          <form onSubmit={handleSubmit} className="col">
            <input
              onChange={handleInput}
              type="text"
              placeholder="email"
              name="email"
              className="card"
            />
            <input
              onChange={handleInput}
              type="password"
              placeholder="password"
              name="password"
              className="card"
            />
            <div className="center">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="center">
          <p>
            You don't have an account yet?{" "}
            <span>
              <NavLink to="/registration">Registration</NavLink>
            </span>
            /
            <span>
              <NavLink to="/welcome">Back</NavLink>
            </span>
          </p>
        </div>
        {/* FORGOT PASSWORD  */}
        <div className="center">
          <p>
            Forgot your password?{" "}
            <span>
              <NavLink to="/forgotpassword">Click Here</NavLink>
            </span>
          </p>
        </div>
        <ToastContainer />
      </div>

      <div className="efjm-logo">
        <img src={efjm} alt="logo of the efjm-team" />
      </div>
    </>
  );
};

export default Login;
