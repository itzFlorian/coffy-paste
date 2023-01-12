import { useState } from "react";
import { NavLink } from "react-router-dom";

const INITIAL = {
  email:"",
  password:""
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
    if(data.status.ok){

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
        <p></p>
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
        <p>You already have an account? <span><NavLink to="/login">Login</NavLink></span></p>
      </div>
    </div>
  );
};

export default Registration;