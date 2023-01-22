import { useState } from "react";
import { NavLink } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { host } from "../api/Routes.jsx";

// images
import bg from "../images/coffypaste_bg_568217968.png";
import logoM from "../images/coffypaste_logo_900.png";
import efjm from "../images/efjm_logo.png";

const INITIAL = {
  email: "",
  password: "",
};

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  theme: "dark",
};

const Registration = () => {
  const [regData, setRegData] = useState(INITIAL);

  const handleInput = (event) => {
    setRegData({ ...regData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = async () => {
      await fetch(`${host}/users`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(regData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => {
          if (data.message) {
            toast.info("Please verify your emailaddress", toastOptions);
          }
          if (data.error) {
            data.error.map((err) => {
              toast.error(err.msg, toastOptions);
            });
            toast.error(err.msg, toastOptions);
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

      <div className="reg-container">
        <div className="logoM-container">
          <img src={logoM} alt="logo" />
        </div>

        <div className="rotate">
          <h1 className="center">Registration</h1>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit} className="col">
            <input
              onChange={handleInput}
              type="text"
              placeholder="username"
              name="userName"
              className="card"
            />
            <input
              onChange={handleInput}
              type="text"
              placeholder="city or address"
              name="city"
              className="card"
            />
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
            <input
              onChange={handleInput}
              type="text"
              placeholder="your favorite coffee"
              name="myFavCoff"
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
            You already have an account?{" "}
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
  );
};

export default Registration;
