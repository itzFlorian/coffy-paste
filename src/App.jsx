// - - - - - S A S S - - - - -
import "./styles/buttons.scss"
import "./styles/colors.scss"
import "./styles/elements.scss"
import "./styles/fonts.scss"
import "./styles/images.scss"
import "./styles/main.scss"
import "./styles/scrolling.scss"
import "./styles/splitscreen.scss"



import { useState } from 'react'
import { Routes, Route } from 'react-router'


import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"
import Main from "./components/Main.jsx"
import Welcome from "./components/Welcome.jsx"
import EFJM from "./components/EFJM.jsx"

import NavBar from "./components/NavBar.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="*" element={<Main />} />
        <Route path="/efjm" element={<EFJM />} />     
      </Routes>      
    </div>
  )
}

export default App