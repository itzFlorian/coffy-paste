import { useNavigate } from "react-router-dom";


// images
import avatar from "../images/coffypaste_icon_avatar.png";
import community from "../images/coffypaste_icon_community.png";
import shop from "../images/coffypaste_icon_shop.png";
import stats from "../images/coffypaste_icon_stats.png";


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbarL ">
      <div className="top row">
        <div
          className="iconL center col cursor-pointer"
          onClick={() => navigate("/myaccount")}
        >
          <img src={avatar} />
          <p>my account</p>
        </div>
        <div
          className="iconL center col cursor-pointer"
          onClick={() => navigate("/community")}
        >
          <img src={community} />
          <p>my community</p>
        </div>
      </div>

      <div className="bottom row" >
        <div className="iconL center col cursor-pointer" onClick={() => navigate("/shops")}>
          <img src={shop} />
          <p>shops</p>
        </div>
        <div className="iconL center col cursor-pointer" onClick={() => navigate("/stats")}>
          <img src={stats} />
          <p>stats</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
