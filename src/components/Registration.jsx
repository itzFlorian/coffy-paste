import { useState } from "react";
import { NavLink } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


// - - - - - ICONS - - - - - 
import  bg from "/src/images/coffypaste_bg_568217968.png"
import  avatar from "/src/images/coffypaste_icon_avatar.png"
import  coffee from "/src/images/coffypaste_icon_coffee_default.png"
import  community from "/src/images/coffypaste_icon_community.png"
import  searchL from "/src/images/coffypaste_icon_search_l.png"
import  searchS from "/src/images/coffypaste_icon_search_s.png"
import  shop from"/src/images/coffypaste_icon_shop.png"
import  stats from "/src/images/coffypaste_icon_stats.png"
import  logoM from "/src/images/coffypaste_logo_900.png"
import  logoL from "/src/images/coffypaste_logo_2352.png"
import  efjm from "/src/images/efjm_logo.png"
// - - - - - ICONS - - - - -


const INITIAL = {
  email:"",
  password:""
}

const toastOptions = {
  position:"bottom-right",
  autoClose: 8000,
  theme:"dark"
}

const Registration = () => {
  const [regData, setRegData] = useState(INITIAL)

  const handleInput = (event) => {
    setRegData({...regData, [event.target.name]:event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const sendData = async () => {
    const promise = await fetch('', {
      method: 'POST',
      body: JSON.stringify(regData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await promise.json()
    if(!data.status.ok){
      toast.error(data.msg, toastOptions)
    }
    }
    sendData()
  }

  return (
    <div className="reg-container">
      <div className="logo">
        <img src={logoM} alt="logo" />
      </div>
      <div className="text">
        <p>Registration</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="xxx" name="xxx" onChange={handleInput}/>
          <input type="text" placeholder="xxx" name="xxx" onChange={handleInput}/>        
          <input type="text" placeholder="xxx" name="xxx" onChange={handleInput}/>
          <input type="text" placeholder="xxx" name="xxx" onChange={handleInput}/>
          <input type="text" placeholder="email" name="email" onChange={handleInput}/>
          <input type="text" placeholder="password" name="password" onChange={handleInput}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>You already have an account? <span><NavLink to="/login">Login</NavLink></span>/<span><NavLink to="/welcome">Back</NavLink></span></p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Registration;