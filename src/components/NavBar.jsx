import { useNavigate } from "react-router-dom";

// images
import avatar from "../images/coffypaste_icon_avatar.png";
import community from "../images/coffypaste_icon_community.png";
import shop from "../images/coffypaste_icon_shop.png";
import stats from "../images/coffypaste_icon_stats.png";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbarL row-col">
      <div className="top row">
        <div
          className="iconL center col cursor-pointer"
          onClick={() => navigate("/myaccount")}
          title="see & edit your account"
        >
          <img src={avatar} />
          <p>my account</p>
        </div>
        <div
          className="iconL center col cursor-pointer"
          onClick={() => navigate("/community")}
          title="meet the coffy-paste community"
        >
          <img src={community} />
          <p>my community</p>
        </div>
      </div>

      <div className="bottom row">
        <div
          className="iconL center col cursor-pointer"
          onClick={() => navigate("/shops")}
          title="see the coffy-paste shops"
        >
          <img src={shop} />
          <p>shops</p>
        </div>
        <div
          className="iconL center col cursor-pointer"
          onClick={() => navigate("/stats")}
          title="coffy-paste statistics"
        >
          <img src={stats} />
          <p>stats</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
