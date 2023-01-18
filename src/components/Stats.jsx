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

      <div className="mt splitscreen">
        {/* LEFTSIDE */}
        <div>
          <h1 className="foBE">User-Statistiken</h1>

          <div className="mt2">
            <p className="foOW">Anzahl der User:</p>
            <h1>xyz</h1>
          </div>

          <div className="mt2">
            <p className="foOW">User-Freundschaften:</p>
            <h1>xyz</h1>
          </div>
        </div>


        {/* RIGHTSIDE */}
        <div>
          <h1 className="foBE">Shop-Statistiken</h1>

          <div className="mt2">
            <p className="foOW">Anzahl der Shops:</p>
            <h1>xyz</h1>
          </div>

          <div className="mt2">
            <p className="foOW">Anzahl der Posts:</p>
            <h1>xyz</h1>
          </div>

          <div className="mt2">
            <p className="foOW">test</p>
            <h1>xyz</h1>
          </div>

        </div>
      </div>
    </>
  );
};

export default Stats;