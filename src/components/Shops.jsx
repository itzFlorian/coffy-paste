// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import { GOOGLE_API_KEY } from '../api/Google_API.jsx';
import React from 'react'
import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
import { host } from "../api/Routes.jsx";
import { useState, useEffect, useContext } from "react";
import Geocode from "react-geocode";

// I M P O R T   C O N T E X T
import UserContext from '../context/userContext.jsx';

// I M P O R T  &  D E C L A R E  K E Y S


// - - - - - ICONS - - - - - 
const bg = "/src/images/coffypaste_bg_568217968.png"
const avatar = "/src/images/coffypaste_icon_avatar.png"
const coffee = "/src/images/coffypaste_icon_coffee_default.png"
const community = "/src/images/coffypaste_icon_community.png"
const searchL = "/src/images/coffypaste_icon_search_l.png"
const searchS = "/src/images/coffypaste_icon_search_s.png"
const shop = "/src/images/coffypaste_icon_shop.png"
const stats = "/src/images/coffypaste_icon_stats.png"
const logoM = "/src/images/coffypaste_logo_900.png"
const logoL = "/src/images/coffypaste_logo_2352.png"
const efjm = "/src/images/efjm_logo.png"
// - - - - - - - - -  

//========================

// Get latitude & longitude from address. // Google API
function Shops() {
// GET USERDATA FROM USECONTEXT //
const [shops, setShops] = useState([]);
const [currentUser, setCurrentUser]= useContext(UserContext);
const [user, setUser] = useState(currentUser);

// Geocode.setApiKey(GOOGLE_API_KEY);
// Geocode.fromAddress(user.city).then(
//   (response) => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   (error) => {
//     console.error(error);
//   }
// );
// console.log(Geocode);

useEffect(() => {
  // FETCH CURRENT USER DATA
  const fetchCurrentUserData = async () =>{
    await fetch(`${host}/users/${currentUser}`, {
    credentials:"include",
    method: 'GET',   
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(json => json.json())
  .then(data => setUser(data));
  }
  fetchCurrentUserData();
  console.log(currentUser);
  console.log(user);
}, []);


useEffect(()=> {
  // FETCH SHOPS DATA START //
  const fetchShops = async () =>{
    await fetch(`${host}/coffeeshops`, {
    credentials:"include",
    method: 'GET',   
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(json => json.json())
  .then(data => setShops(data));
  }
  fetchShops()
},[])


// FETCH SHOPS DATA END //

  // const [isShown, setIsShown] = useState(false);

  // const shopsFiltered = allShops.filter(shop => {
  //   return (
  //     // Filter shops with range from longitude and latitude
  //   )
  // })

  const overlayHandler = (e) => {
    setIsShown(current => !current);
  }

 // [latitude, longitude]
  return (
    <>
      <Map height={600} defaultCenter={[user.latitude, user.longitude]} defaultZoom={4}>
        {shops.map((shop, i) => {
          return (      
            <Marker
              width={30}
              anchor={[shop.location.address.latitude, shop.location.address.longitude]}
              key={i}
              onClick={(e) => overlayHandler(e)}
            />
          )
        })}
        {(shops.map((shop, i) => {
          return (
            <Overlay 
              anchor={[shop.location.address.latitude, shop.location.address.longitude]} 
              offset={[120, 79]}>
              <div width={240} height={158} alt=''>
                {shop.name}
              </div>
            </Overlay>
          )
        }))}
        <ZoomControl />
      </Map>
      {/* <div>
        <ul>
          shopsFiltered.map((shop) => li)
        </ul>
      </div>  */}
      
    </>
  )
}

export default Shops;