import { useNavigate } from "react-router";


// - - - - - ICONS - - - - - 
import avatar from "/src/images/coffypaste_icon_avatar.png";
import bg from "/src/images/coffypaste_bg_568217968.png";
import logoM from "/src/images/coffypaste_logo_900.png";
import efjm from "/src/images/efjm_logo.png";
import xing from "./src/image/sm_xing";
import




const EFJM = () => {
  const navigate = useNavigate()
console.log(logoM);
  return (
    <>
      <div className="flex relative">
        <div className="bg"></div>
      </div>

      <div className="welcome-container">
        <div className="logoM-container">
          <img src={logoM} alt="logo" />
        </div>

        <div className="rotate">
          <h1 className="center">Hello, we are "efjm"</h1>
        </div>

        <div className="card-container">
          <div className="icon-container icon-top bg-gradL flex center">
            <img src={avatar} className="avatar-icon"/>
          </div>
          <div className="member-card bg-oldwhite">
            <h2 className="efjm-h2">Eleni</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, esse.</p>

            <div className="circle-container flex row">
              <div className="circle bg-gradL">

              </div>
              <div className="circle bg-gradL">

              </div>
              <div className="circle bg-gradL">

              </div>
            </div>
            
          </div>
        </div>
      </div>


      <div className="efjm-logo">
        <img
          src={efjm}
          alt="logo of the efjm-team"
        />
      </div>

    </>
  );
};

export default EFJM;