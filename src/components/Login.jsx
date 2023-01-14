import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import { host } from "../api/Routes.jsx";

import logo from "../images/coffypaste_logo_2352.png"

// - - - - - ICONS - - - - - 
const bg = "/src/images/coffypaste_bg_568217968.png"
const avatar = "/src/images/coffypaste_icon_avatar.png"
const coffee = "/src/images/coffypaste_icon_coffee_default.png"
const community = "/src/images/coffypaste_icon_community.png"
const searchL = "/src/images/coffypaste_icon_search_l.png"
const searchS = "/src/images/coffypaste_icon_search_s.png"
const shop = "/src/images/coffypaste_icon_shop.png"
const stats = "/src/images/coffypaste_icon_stats.png"
const logoM = "/src/images/coffypaste_logo_900.png"
const logoL = "/src/images/coffypaste_logo_2352.png"
const efjm = "/src/images/efjm_logo.png"
// - - - - - - - - -  

const INITIAL = {
  email:"",
  password:""
}

const toastOptions = {
  position:"bottom-right",
  autoClose: 8000,
  theme:"dark"
}

const Login = () => {
  const navigate = useNavigate() 
  const [loginData, setLoginData] = useState(INITIAL)

  const handleInput = (event) => {
    setLoginData({...loginData, [event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const sendData = async () => {
    await fetch(`${host}/users/login`, {
      credentials:"include",
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => {
      console.log(data.message);
      if(data.error){
        toast.error("email or password wrong!", toastOptions)
      }
      if(data.message){  
        navigate("/")

      }    
    })
    }
    sendData()  
  }

  useEffect(()=> {
  const checkvalidation = async () =>{
    await fetch(`${host}/users/checklogin`, {
    credentials:"include",
    method: 'GET',   
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(json => json.json())
  .then(data => {
    if(data.message){
      navigate("/")
    }
  })
  }
  checkvalidation()
},[])

  return (
    <>
      <div className="flex relative">
        <div className="bg"></div>
      </div>

      <div className="logoM-container">
        <img src={logoM} alt="logo" />
      </div>

      <div className="rotate">
        <h1 className="center">create my account</h1>
      </div>


    <div className="login-container">
      <div className="text">
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="col" >
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
              <button
                type="submit"
                className="btn">Submit
              </button>
            </div>
        </form>
      </div>
      <div className="center">
        <p>You already have an account? <span><NavLink to="/registration">registration</NavLink></span>/<span><NavLink to="/welcome">Back</NavLink></span></p>
      </div>
      <ToastContainer/>
      </div>
      
      <div className="efjm-logo">
        <img
          src={efjm}
          alt="logo of the efjm-team" />
      </div>
    </>
  );
};

export default Login;