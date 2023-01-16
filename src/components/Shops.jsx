// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import {GOOGLE_API_KEY} from '../api/Google_API.jsx';
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
const [shops, setShops] = useState([]);         // SHOPS DATA
const [user, setUser] = useContext(UserContext) // USER ID
const [userData, setUserData] = useState("");   // USER DATA
const [userLatLon, setUserLatLon] = useState({lat: 0, lon: 0})

// FETCH USER LONG.- & LATITUDE //
// Geocode.setApiKey(GOOGLE_API_KEY);
// Geocode.setLanguage("de");
// Geocode.setRegion("de");
// Geocode.fromAddress(user.city).then(
//   (response) => {
//     const { lat, lng } = response.results[0].geometry.location;
//     setUserLatLon({lat: lat, lon: lon});
//     console(lat, lon);
//   },
//   (error) => {
//     console.error(error);
//   }
// );
// console.log(Geocode);

// FETCH START // 
useEffect(() => {
  // FETCH CURRENT USER ID //
  const checkValidation = async () =>{
    await fetch(`${host}/users/checklogin`, {
    credentials:"include",
    method: 'GET',   
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => {    
      // console.log("data von checkValidation", data);
      if(data.userId){
        setUser(data.userId)
      }
      if(data.error){
        navigate("/welcome")     
      }
    })
  }

  // FETCH CURRENT USER DATA //
  const fetchCurrentUserData = async () =>{
    await fetch(`${host}/users/${user}`, {
    credentials:"include",
    method: 'GET',   
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => setUserData(data));
  }
  
  // FETCH SHOPS DATA //
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

  checkValidation()
  fetchCurrentUserData();
  fetchShops()
}, []);
// FETCH END //
console.log('user', user);
console.log('userData', userData);
console.log('shops', shops);
// console.log('lat', +shops[0].location.address.latitude);
// console.log('lon', +shops[0].location.address.longitude);


const [isShown, setIsShown] = useState(false);
const overlayHandler = (e) => {
  setIsShown(current => !current);
}

 // [latitude, longitude]
  return (
    <div className='map' height={"500px"} width={"750px"}>
      <Map height={300} width={500} defaultCenter={[51.1646177154734, 7.050247815379566]} defaultZoom={4}>
        {shops.map((shop, i) => {
          return (      
            <Marker
              width={30}
              anchor={[+shop.location.address.latitude, +shop.location.address.longitude]}
              key={i}
              onClick={(e) => overlayHandler(e)}
            />
          )
        })}
        {isShown && (shops.map((shop, i) => {
          return (
            <Overlay 
              anchor={[+shop.location.address.latitude, +shop.location.address.longitude]} 
              offset={[120, 79]}>
              <div width={240} height={158} alt=''>
                {shop.name}
              </div>
            </Overlay>
          )
        }))}
        <ZoomControl />
      </Map>
      <div>
        <ul>
          {shops.map((shop) => 
            <li>{shop.name}</li>
          )}
        </ul>
      </div> 
    </div>
  )
}

export default Shops;