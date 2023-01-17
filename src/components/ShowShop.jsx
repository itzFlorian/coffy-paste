import { useParams } from "react-router";


// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";


// images
import plus from "../images/coffypaste_icon_plus.png"


const ShowShop = () => {
  const {id} = useParams()
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
    </> 
  );
};

export default ShowShop;