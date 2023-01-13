import { useNavigate } from "react-router";


// - - - - - ICONS - - - - - 
import bg from "/src/images/coffypaste_bg_568217968.png"
import logoM from "/src/images/coffypaste_logo_900.png"
import efjm from "/src/images/efjm_logo.png"


const Welcome = () => {
  const navigate = useNavigate()
console.log(logoM);
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


        <div className="buttons col">
          <button
            className="btn"
            onClick={() => navigate("/registration")}>create account
          </button>
          <button
            className="btn"
            onClick={() => navigate("/login")}>login
          </button>
        </div>
      </div>

      <div className="efjm-logo">
        <img src={efjm} alt="logo of the efjm-team" />
      </div>

    </>
  );
};

export default Welcome;