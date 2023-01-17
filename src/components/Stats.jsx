// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";


// - - - - - I M A G E S - - - - -
import searchS from "../images/coffypaste_icon_search_s.png"
import avatar from "../images/coffypaste_icon_avatar.png"
import coffee from "../images/coffypaste_icon_coffee_default.png"
import plus from "../images/coffypaste_icon_plus.png"



const Stats = () => {
  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="flex">
          <button className="search-btn">
            <img src={searchS} className="search-img" alt="search" />
          </button>
          <button className="logout-btn">
            <img src={plus} className="logout" alt="logout" />
          </button>
        </div>
      </div>

      <div className="mt x splitscreen">
        <div className="y">
          <h1>user stats</h1>
          <div className="card">
            <p>newest user:</p>
            <h1 className="sigfont foBE">xyz</h1>
          </div>
          <div className="card">
            <p>user-counter:</p>
            <h1 className="sigfont foBE">xyz</h1>
          </div>
          <div className="card">
            <p>coffy-buddys:</p>
            <h1 className="sigfont foBE">xyz</h1>
          </div>
        </div>

        <div>
          <h1>coffy stats</h1>
          <div className="card">
            <p>best shop:</p>
            <h1 className="sigfont foBE">xyz</h1>
          </div>
          <div className="card">
            <p>shop-counter:</p>
            <h1 className="sigfont foBE">xyz</h1>
          </div>
          <div className="card">
            <p>most comments:</p>
            <h1 className="sigfont foBE">xyz</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;