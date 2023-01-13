import { useNavigate } from "react-router";
import logo from "../images/coffypaste_logo_2352.png"

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div className="welcome-container">
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <div className="text">
        <p>Welcome to the tasty side</p>
      </div>
      <div className="buttons">
        <button onClick={()=> navigate("/registration")}>create account</button>
        <button onClick={()=> navigate("/login")}>login</button>
      </div>
    </div>
  );
};

export default Welcome;