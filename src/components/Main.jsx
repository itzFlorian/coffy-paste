import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Route, Routes } from "react-router";
import { host } from "../api/Routes.jsx";
import NavBar from "./NavBar.jsx";
import Shops from "./Shops.jsx";
import Stats from "./Stats.jsx";
import MyAccount from "./MyAccount.jsx";
import Community from "./Community.jsx";
import EFJM from "./EFJM.jsx"
import ShowUser from "./ShowUser.jsx";
import ShowShop from "./ShowShop.jsx";

import UserContext from "../context/userContext.jsx";

// - - - - - ICONS - - - - -
import avatar from "/src/images/coffypaste_icon_avatar.png";
import community from "/src/images/coffypaste_icon_community.png";
import searchS from "/src/images/coffypaste_icon_search_s.png";
import shop from "/src/images/coffypaste_icon_shop.png";
import stats from "/src/images/coffypaste_icon_stats.png";
import logoM from "/src/images/coffypaste_logo_900.png";
import efjm from "/src/images/efjm_logo.png";
// - - - - - - - - -

const Main = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext)
  
  useEffect(() => {
    const checkValidation = async () =>{
      await fetch(`${host}/users/checklogin`, {
      credentials:"include",
      method: 'GET',   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => {    
      console.log("data von checkValidation", data);
      if(data.message){
        setUser(data.userId)
        navigate("/")
      }else{
        navigate("/welcome")
      }
    })
    }
    checkValidation()
  }, []);

  return (
    <>
      <div className="flex relative">
        <div className="bg"></div>
      </div>

      <div className="logoM-container">
        <img src={logoM} alt="logo" />
      </div>

      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/shops" element={<Shops/>} />
        <Route path="/showShop/:id" element={<ShowShop/>} />
        <Route path="/myaccount/" element={<MyAccount />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/showUser/:id" element={<ShowUser />} />
        <Route path="/efjm" element={<EFJM/>} />
      </Routes>

      <div className="efjm-logo">
        <div onClick={() => navigate("/efjm")}>
          <img src={efjm} alt="logo of the efjm-team" />
        </div>
      </div>
    </>
  );
};

export default Main;
