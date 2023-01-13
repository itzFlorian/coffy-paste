import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { host } from "../api/Routes.jsx";

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
      console.log(data);
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


      {/* - - - N A V B A R - - - */}
      <div className="nav-bar">

        <div className="top row">
          <div className="iconL center col">
            <img src={avatar} />
            <p>my account</p>
          </div>
          <div className="iconL center col">
            <img src={community} />
            <p>my community</p>
          </div>
        </div>

        <div className="bottom row">
          <div className="iconL center col">
            <img src={shop} />
            <p>shops</p>
          </div>
          <div className="iconL center col">
            <img src={stats} />
            <p>stats</p>
          </div>
        </div>
      </div>
      
      <div className="efjm-logo">
        <img
          src={efjm}
          alt="logo of the efjm-team" />
      </div>
    </>
  );
};

export default Main;