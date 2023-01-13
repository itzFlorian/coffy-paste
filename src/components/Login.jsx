import { useState } from "react";
import { NavLink } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

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
  const [loginData, setLoginData] = useState(INITIAL)

  const handleInput = (event) => {
    setLoginData({...loginData, [event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const sendData = async () => {
    const promise = await fetch('', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await promise.json()
    if(data.status.ok){
      toast.error(data.msg, toastOptions)
    }
    }
    sendData()
  }

  return (
    <div className="login-container">
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <div className="text">
        <p>Login</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" name="email" onChange={handleInput}/>
          <input type="text" placeholder="password" name="password" onChange={handleInput}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>You already have an account? <span><NavLink to="/registration">registration</NavLink></span>/<span><NavLink to="/welcome">Back</NavLink></span></p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;