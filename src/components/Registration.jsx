import { useState } from "react";
import { NavLink } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import {host} from "../api/Routes.jsx"


// - - - - - ICONS - - - - - 
import bg from "/src/images/coffypaste_bg_568217968.png"
import logoM from "/src/images/coffypaste_logo_900.png"
import efjm from "/src/images/efjm_logo.png"



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
    await fetch(`${host}/users/`, {
      method: 'POST',
      body: JSON.stringify(regData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => {
      console.log(data);
      if(data.error){
        data.error.map((err)=>{
          toast.error(err.msg, toastOptions)
        })
      }    
    })
    }
    sendData()
  }

  return (

        <>
      <div className="bg">
        <img
            src={bg}
            className="bg-img"
            alt="tasty coffee beans"
        />
      </div>
    <div className="reg-container">
      <div className="logo">
        <img src={logoM} alt="logo" />
      </div>
      <div className="text">
        <p>Registration</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" name="userName" onChange={handleInput}/>
          <input type="text" placeholder="city" name="city" onChange={handleInput}/>        
          <input type="text" placeholder="email" name="email" onChange={handleInput}/>
          <input type="password" placeholder="password" name="password" onChange={handleInput}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>You already have an account? <span><NavLink to="/login">Login</NavLink></span>/<span><NavLink to="/welcome">Back</NavLink></span></p>
      </div>
      <ToastContainer/>
      </div>
      
      </>
  );
};

export default Registration;