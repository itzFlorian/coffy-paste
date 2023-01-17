// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import React from 'react'
import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
import { host } from "../api/Routes.jsx";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router'; 
import Geocode from "react-geocode";

// I M P O R T   C O N T E X T
import UserContext from '../context/userContext.jsx';

// TOAST 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

// I M P O R T  &  D E C L A R E  K E Y S
import {GOOGLE_API_KEY} from '../api/Google_API.jsx';


// - - - - - ICONS - - - - - 
import searchS from "../images/coffypaste_icon_search_s.png"
import efjm from "../images/efjm_logo.png"
import heart from "../images/coffypaste_icon_heart.png"
import shop from "../images/coffypaste_icon_shop.png"
import minus from "../images/coffypaste_icon_minus.png"
import plus from "../images/coffypaste_icon_plus.png"


// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";


//========================

// Get latitude & longitude from address. // Google API
function Shops() {
// GET USERDATA FROM USECONTEXT //
const [shops, setShops] = useState([]);                // SHOPS DATA
const [currShop, setCurrShop] = useState(undefined);   // CURR SHOP
const [user, setUser] = useContext(UserContext)        // USER ID
const [userData, setUserData] = useState("");          // USER DATA
const [userGeoData, setUserGeoData] = useState({lat: 0, lon: 0});

const navigate = useNavigate()

const toastOptions = {
  position:"bottom-right",
  autoClose: 8000,
  theme:"dark"
}

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
  .then(json => {
    if(!json.ok){
      navigate("/welcome")
    }
    return json.json()
  })
  .then(data => {
    setUser(data.userId)
  })
  }
  checkValidation()

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

useEffect(() => {
  // FETCH USER LONG.- & LATITUDE //
  Geocode.setApiKey(GOOGLE_API_KEY);
  Geocode.setLanguage("de");
  Geocode.setRegion("de");
  Geocode.fromAddress(userData.city).then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    // console.log(lat, lng)
    setUserGeoData({lat: lat, lon: lng});
  },
  (error) => {
    console.error(error);
  }
  );
  // console.log(userGeoData);
}, [userData])

const addShopHandler = async (shopId) => {
  await fetch(`${host}/coffeeshops/favshop/${shopId}`, {
  method: 'POST',
  body: JSON.stringify( {userId:user} ),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
    if(!response.ok){
      toast.info("something went wrong", toastOptions)
    }
    return response.json()
  })
  .then((json) => {
    if(json){
      toast.info(json.message, toastOptions)
      console.log("hallo");
    }
  });
}

// FETCH END //
// console.log('user', user); 
// console.log('userData', userData);
// console.log('shops', shops);

// CALULATE & FILTER DISTANCE WITH GEOCODES START //
function deg2rad(deg) {
  return deg * (Math.PI/180)
}
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2-lat1);  // deg2rad below
  let dLon = deg2rad(lon2-lon1); 
  let a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  let d = R * c; // Distance in km
  return d;
}

const addDistToShops = shops.map((shop) => {
  const addDist = getDistanceFromLatLonInKm(
      userGeoData.lat, 
      userGeoData.lon, 
      +shop.location.address.latitude,
      +shop.location.address.longitude
    )
    return {distance:addDist, shop: shop};
})
const sortShopsByDist = addDistToShops.sort((a,b) => a.distance - b.distance);
// CALULATE & FILTER DISTANCE WITH GEOCODES END //

// SHOW PIN OVERLAYS
const [isShown, setIsShown] = useState(false);
const overlayHandler = (e, shop) => {
  setCurrShop(shop);
}
// console.log();
// [latitude, longitude]
console.log(currShop);

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

      <div className="scroll-container">
        <>
          <h1>map</h1>

          {/* MAP */}
          <div className='map'>
            {(userGeoData.lat !== 0 || userGeoData.lon !== 0) 
            && 
            <Map 
            height={300} width={500} 
            defaultCenter={[userGeoData.lat, userGeoData.lon]}  
            defaultZoom={8}>
              {shops.map((shop) => {
                return (      
                  <Marker
                    width={30}
                    anchor={[+shop.location.address.latitude, +shop.location.address.longitude]}
                    key={shop._id}
                    onClick={(e) => overlayHandler(e, shop)}
                  />
                )
              })}
              {currShop && 
                  <Overlay 
                    anchor={[+currShop.location.address.latitude, +currShop.location.address.longitude]} 
                    offset={[120, 79]}>
                    <div width={240} height={158} alt=''>
                      {currShop.name}
                    </div>
                  </Overlay>
              }
              <ZoomControl />
            </Map>
            }

            {/* CLICKED STORE */}
            <div className="store-card">
              <div className="flex center">
                <div className="col">
                  {/* NAME */}
                  <div onClick={() => addShopHandler(currShop._id)}>
                    <p><span className="sigfontL">name: </span>{currShop && currShop.name}</p>
                  </div>
                  {/* DISTANCE */}
                  <div onClick={() => addShopHandler(currShop._id)}>
                    <p><span className="sigfontL">distance: </span>{currShop && currShop.name}</p>
                  </div> 
                </div>
              </div>
              <div className=" patch-container">
                <div className="patch-btn-l row">
                  <div className="patch-btn bg-gradL center">
                    <img src={plus} className="patch-img" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* LIST OF SHOPS */}
            <div>
              <h1>list sorted by distance</h1>
              <ul>
                {sortShopsByDist.map((shop) => 
                <div >
                  <li 
                    onClick={(e) => overlayHandler(e, shop.shop)}
                    key={shop.shop._id}
                    >


                    {/* DISTANCE-LIST */}
                    <div className="store-card">
                      <div className="flex center">

                        <div className="col">
                          {/* NAME */}
                          <div>
                            <p><span className="sigfontD">name: </span>
                            {shop.shop.name}
                            </p>
                          </div>
                          {/* DISTANCE */}
                          <div >
                            <p><span className="sigfontD">distance: </span>xxx</p>
                          </div> 
                          <div onClick={()=> navigate(`/showShop/${shop.shop._id}`)}>
                            <p><span className="sigfontD">SHOW </span></p>
                          </div> 
                        </div>
                      </div>
                      <div className=" patch-container">
                        <div className="patch-btn-l row">
                          <div className="patch-btn bg-gradD center">
                            <img src={plus} className="patch-img" alt=""  onClick={() => addShopHandler(currShop._id)}/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </li>
                </div>
                )}
              </ul>
            </div> 
            <ToastContainer/>
          </div>



        </>
      </div>
    </>
  )
}

export default Shops;