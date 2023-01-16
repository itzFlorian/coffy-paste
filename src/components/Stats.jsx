// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";


// - - - - - I M A G E S - - - - -
import searchS from "../images/coffypaste_icon_search_s.png"
import avatar from "../images/coffypaste_icon_avatar.png"
import coffee from "../images/coffypaste_icon_coffee_default.png"



const Stats = () => {
  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="">
          <button className="search-btn">
            <img src={searchS} className="search-img" alt="search" />
          </button>
        </div>
      </div>

      <div>
        <h1>user stats</h1>
        <div className="card"></div>
      </div>

      <div>
        <h1>coffy stats</h1>
        <div className="card"></div>
      </div>
    </>
  );
};

export default Stats;