import { useNavigate } from "react-router";



// - - - - - ICONS - - - - - 
import bg from "../images/coffypaste_bg_568217968.png"
import logoM from "../images/coffypaste_logo_900.png"
import efjm from "../images/efjm_logo.png"
import avatar from "../images/coffypaste_icon_avatar.png"
import xing from "../images/sm_xing.png"
import linkedin from "../images/sm_linkedin.png"
import github from "../images/sm_github.png"



const EFJM = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex relative">
        <div className="bg"></div>
      </div>

      <div className="logoM-container">
        <img src={logoM} alt="logo" />
      </div>

      <div className="welcome-container">
        <div className="rotate">
          <h1 className="center">Hello, we are "efjm"</h1>
        </div>

        <div className="card-container">
          <div className="icon-container icon-top bg-gradL flex center">
            <img src={avatar} className="avatar-icon"/>
          </div>
          <div className="member-card bg-oldwhite">
            <h2 className="efjm-h2">Eleni</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur, esse.</p>

            <div className="circle-container flex row">
              <div className="circle bg-gradL center">
                <img src={linkedin} className="sm-icon"></img>
              </div>
              <div className="circle bg-gradL center">
                <img src={xing} className="sm-icon"></img>
              </div>
              <div className="circle bg-gradL center">
                <img src={github} className="sm-icon"></img>
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