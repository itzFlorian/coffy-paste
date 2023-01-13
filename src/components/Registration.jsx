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
        <img src="" alt="logo" />
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