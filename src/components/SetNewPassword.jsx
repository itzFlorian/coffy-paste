import React from 'react'
import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { host } from "../api/Routes.jsx";

import UserContext from "../context/userContext.jsx";

// - - - - - ICONS - - - - -
const bg = "/src/images/coffypaste_bg_568217968.png";
const avatar = "/src/images/coffypaste_icon_avatar.png";
const coffee = "/src/images/coffypaste_icon_coffee_default.png";
const community = "/src/images/coffypaste_icon_community.png";
const searchL = "/src/images/coffypaste_icon_search_l.png";
const searchS = "/src/images/coffypaste_icon_search_s.png";
const shop = "/src/images/coffypaste_icon_shop.png";
const stats = "/src/images/coffypaste_icon_stats.png";
const logoM = "/src/images/coffypaste_logo_900.png";
const logoL = "/src/images/coffypaste_logo_2352.png";
const efjm = "/src/images/efjm_logo.png";
// - - - - - - - - -

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  theme: "dark",
};

const INITIAL = {
  email: "",
  password: "",
};


export default function SetNewPassword() {
  const navigate = useNavigate();
  // const [data, setData] = useState("TEST"); // DATA FROM FETCH AT MOUNT
  const [newData, setNewData] = useState(INITIAL); // DATA FROM FETCH WITH NEW PASSWORD

  const handleInput = (event) => {
    setNewData({ ...newData, [event.target.name]:event.target.value});
  };

  // FETCH FOR SET NEW PASSWORD
  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = async () => {
      await fetch(`${host}/users/setnewpassword`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => {
          if (data.error) {
            toast.error("Email is not verified to change password", toastOptions);
          } else {
            toast.info("Password change SUCCESSFULLY", toastOptions)
            navigate("/");            
          }
        });
    };
    sendData();
  }
  return (
    <>
    <div className="flex relative">
      <div className="bg"></div>
    </div>

    <div className="logoM-container">
      <img src={logoM} alt="logo" />
    </div>

    <div className="rotate">
      <h1 className="center">Set your new password</h1>
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
            placeholder="new password"
            name="password"
            className="card"
          />
          <div className="center">
            <button type="submit" className="btn">
              Send it
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>

    <div className="efjm-logo">
      <img src={efjm} alt="logo of the efjm-team" />
    </div>
  </>
  )
}
