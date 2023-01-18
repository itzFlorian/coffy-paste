import React from 'react'
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
};

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  theme: "dark",
};

export default function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(INITIAL);

  const handleInput = (event) => {
    setEmail({ ...email, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = async () => {
      await fetch(`${host}/users/forgotpassword`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => {
          if (data.error) {
            toast.error("There is no user with this email!", toastOptions);
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
      <h1 className="center">Reset your password</h1>
    </div>

    <div className="login-container">
      <div className="text"></div>
      <div className="form">
        <form onSubmit={handleSubmit} className="col">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Enter your email so we can send you an email to reset your password."
            name="email"
            className="card"
          />
          <div className="center">
            <button type="submit" className="btn">
              Send Reset E-Mail
            </button>
          </div>
        </form>
      </div>
      <div className="center">
        <p>
            You remembered your password?{" "}
          <span>
            <NavLink to="/login">Login</NavLink>
          </span>
          /
          <span>
            <NavLink to="/welcome">Back</NavLink>
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>

    <div className="efjm-logo">
      <img src={efjm} alt="logo of the efjm-team" />
    </div>
  </>
  )
}
