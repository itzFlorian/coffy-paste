import { useNavigate } from "react-router-dom";


// images
import avatar from "../images/coffypaste_icon_avatar.png";
import community from "../images/coffypaste_icon_community.png";
import searchS from "../images/coffypaste_icon_search_s.png";
import shop from "../images/coffypaste_icon_shop.png";
import stats from "../images/coffypaste_icon_stats.png";
import logoM from "../images/coffypaste_logo_900.png";
import efjm from "../images/efjm_logo.png";


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbarL row-col">
      <div className="top row">
        <div
          className="iconL center col"
          onClick={() => navigate("/myaccount")}
        >
          <img src={avatar} />
          <p>my account</p>
        </div>
        <div
          className="iconL center col"
          onClick={() => navigate("/community")}
        >
          <img src={community} />
          <p>my community</p>
        </div>
      </div>

      <div className="bottom row" >
        <div className="iconL center col" onClick={() => navigate("/shops")}>
          <img src={shop} />
          <p>shops</p>
        </div>
        <div className="iconL center col" onClick={() => navigate("/stats")}>
          <img src={stats} />
          <p>stats</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
