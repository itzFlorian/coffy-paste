// - - - - - S A S S - - - - -
import "./styles/main.scss"
import "./styles/buttons.scss"
import "./styles/colors.scss"

// - - - - - - - - -  - - - - -


import { useState } from 'react'
import { Routes, Route } from 'react-router'


import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"
import Main from "./components/Main.jsx"
import Welcome from "./components/Welcome.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/" element={<Main/>}/>
      </Routes>      
    </div>
  )
}

export default App