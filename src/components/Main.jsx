import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { host } from "../api/Routes.jsx";

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
      if(data.status !== "200"){
        navigate("/welcome")
      }
    })
    }
    checkvalidation()
  },[])

  return (
    <div>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="nav-bar">
        <div className="top">
          <div></div>
          <div></div>
        </div>

        <div className="bottom">
          <div></div>
          <div></div>
        </div>
      </div>      
    </div>
  );
};

export default Main;