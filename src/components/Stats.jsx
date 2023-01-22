// external dependencies
import { useNavigate } from 'react-router'; 
import { host } from "../api/Routes.jsx";



// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";
import NavigationS from "./NavigationS.jsx"



// images
import searchS from "../images/coffypaste_icon_search_s.png"
import plus from "../images/coffypaste_icon_plus.png"


const Stats = ({category}) => {
  const navigate = useNavigate()
  
  // LOGOUT 
  const logout = async () => {
    await fetch(`${host}/users/logout`, {
      credentials:"include",
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => {
      if(json.ok) {
        navigate("/welcome")
      }
    })
  }

  return (
    <>
      <div className="flex">
        <Navigation />
        <NavigationS category={category} />

        <div className="flex">
          <button className="search-btn">
            <img src={searchS} className="search-img" alt="search" />
          </button>
          <button 
            onClick={() => logout()}
            className="logout-btn cursor-pointer">
            <img src={plus} className="logout" alt="logout" />
          </button>
        </div>
      </div>

      <div className="mt splitscreen">
        {/* LEFTSIDE */}
        <div>
          <h1 className="foOW">User-Statistiken</h1>

          <div className="mt3">
            <h3 className="foOW fo-le mb1">xyz</h3>
            <p className="foOW">Anzahl der User</p>
          </div>

          <div className="mt3">
            <h3 className="foOW fo-le mb1">xyz</h3>
            <p className="foOW">User-Freundschaften</p>

          </div>
        </div>


        {/* RIGHTSIDE */}
        <div>
          <h1 className="foOW">Shop-Statistiken</h1>

          <div className="mt3">
            <h3 className="foOW fo-le mb1">xyz</h3>
            <p className="foOW">Anzahl der Shops</p>
          </div>

          <div className="mt3">
            <h3 className="foOW fo-le mb1">xyz</h3>
            <p className="foOW">Anzahl der Posts</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Stats;