import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Route, Routes } from "react-router";
import { host } from "../api/Routes.jsx";
import NavBar from "./NavBar.jsx";
import Shops from "./Shops.jsx";

// - - - - - ICONS - - - - - 
import avatar from "/src/images/coffypaste_icon_avatar.png"
import community from "/src/images/coffypaste_icon_community.png"
import searchS from "/src/images/coffypaste_icon_search_s.png"
import shop from "/src/images/coffypaste_icon_shop.png"
import stats from "/src/images/coffypaste_icon_stats.png"
import logoM from "/src/images/coffypaste_logo_900.png"
import efjm from "/src/images/efjm_logo.png"
// - - - - - - - - -



const Main = () => {
  const navigate = useNavigate()

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
      if(!data.message){
        navigate("/welcome")
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
      
        <Routes>
          <Route path="/" element={<NavBar/>} />
          <Route path="/shops" element={<Shops/>}/>
          <Route path="/efjm" element={"EFJM"}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/friends" element={<Friends/>}/>          
        </Routes>     
      
      <div className="efjm-logo">
        <img
          src={efjm}
          alt="logo of the efjm-team" />
      </div>
    </>
  );
};

export default Main;