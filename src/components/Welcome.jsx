import { useNavigate } from "react-router";


// - - - - - ICONS - - - - - 
import  bg from "/src/images/coffypaste_bg_568217968.png"
import  avatar from "/src/images/coffypaste_icon_avatar.png"
import  coffee from "/src/images/coffypaste_icon_coffee_default.png"
import  community from "/src/images/coffypaste_icon_community.png"
import  searchL from "/src/images/coffypaste_icon_search_l.png"
import  searchS from "/src/images/coffypaste_icon_search_s.png"
import  shop from"/src/images/coffypaste_icon_shop.png"
import  stats from "/src/images/coffypaste_icon_stats.png"
import  logoM from "/src/images/coffypaste_logo_900.png"
import  logoL from "/src/images/coffypaste_logo_2352.png"
import  efjm from "/src/images/efjm_logo.png"
// - - - - - ICONS - - - - -


const Welcome = () => {
  const navigate = useNavigate()
console.log(logo);
  return (
    <>
      <div className="bg">
        <img
            src={bg}
            className="bg-img"
            alt="tasty coffee beans"
        />
      </div>

      <div className="welcome-container">
        <div className="logoM-container">
          <img src={logoM} alt="logo" />
        </div>
        <div className="text">
          <h1 className="fo-sig">Welcome to the tasty side</h1>
        </div>
        <div className="buttons">
          <button className="btn" onClick={()=> navigate("/registration")}>create account</button>
          <button onClick={()=> navigate("/login")}>login</button>
        </div>
      </div>

    </>
  );
};

export default Welcome;