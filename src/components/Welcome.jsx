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
      {/* BODY */}
      <div className="center col">
        <div className="logoL-container">
          <img src={logoM} alt="logo" />
        </div>

        <div className="rotate">
          <h1 className="center">Welcome to the tasty side</h1>
        </div>

        <div className="buttons col center">
          <button
            className="btn"
            onClick={() => navigate("/registration")}>create account
          </button>
          <button
            className="btn mt1"
            onClick={() => navigate("/login")}>login
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="efjm-logo">
        <div onClick={() => navigate("/efjm")}>
          <img src={efjm} alt="logo of the efjm-team" />
        </div>
      </div>

    </>
  );
};

export default Welcome;