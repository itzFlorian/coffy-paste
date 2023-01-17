import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { host } from "../api/Routes.jsx";

import searchS from "../images/coffypaste_icon_search_s.png"
import coffee from "../images/coffypaste_icon_coffee_default.png"


// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";


// images
import plus from "../images/coffypaste_icon_plus.png"


const ShowShop = () => {
  const {id} = useParams()
  const [currentShop, setCurrentShop] = useState(undefined)
  console.log(id);

  useEffect(()=> {
    const fetchShop = async () => {
      await fetch(`${host}/coffeeshops/${id}`, {
        credentials:"include",
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(json => json.json())
      .then(data => {
        setCurrentShop(data)
      })
      }
    fetchShop()
  },[])

  console.log(currentShop);
  if(currentShop){
    const { location, services, name, comments, espresso_price, img_url, rating, seats, _id } = currentShop
  }
  return (
    <div>
      <Navigation/>
      {currentShop &&
      <>
        <div className="nameOfTheShop">
          <h1>{currentShop.name}</h1>
        </div>
        <div className="shop-container">
          <p>rating: {currentShop.rating.reduce((a,b)=> a+b, 0) / currentShop.rating.length}</p>
          <p>
            address: {`${currentShop.location.address.street} ${currentShop.location.address.zip} ${currentShop.location.address.city} `}
          </p>
          <div className="extras">
            {currentShop.services.has_sockets && "Bild für sockets"}
            {currentShop.services.has_wifi && "Bild für wifi"}
            {currentShop.services.has_toilet && "Bild für toilet"}
            {currentShop.services.can_take_calls && "Bild für take calls"}
          </div>
        </div>
      </>
        
      }
    </div>
  );
};

export default ShowShop;