// external dependencies
import React from 'react'
import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
import { host } from "../api/Routes.jsx";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router'; 
import Geocode from "react-geocode";


// import
import UserContext from '../context/userContext.jsx';


// toast 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


// import & declare keys
import {GOOGLE_API_KEY} from '../api/Google_API.jsx';


// components
import Navigation from "./Navigation.jsx";


// icons
import searchS from "../images/coffypaste_icon_search_s.png"
import plus from "../images/coffypaste_icon_plus.png"



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

// console.log(addDistToShops.find(el => el.shop._id === currShop._id));
// [0].shop._id
// .find(shop => shop.shop._id === currShop._id)
// console.log(currShop && currShop._id);


  return(
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

      {/* SPLITSCREEN */}
      <div className="mt">
      <div className="splitscreen">




      {/* LEFTSIDE */}
      <div className="cantSee">
      <h1>map</h1>
      {/* MAP */}
      <div>
        {(userGeoData.lat !== 0 || userGeoData.lon !== 0) 
        &&
        <div className="store-card">
          <Map
          height={280} width={800} 
          defaultCenter={[userGeoData.lat, userGeoData.lon]}  
          defaultZoom={15}>
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
        </div>
        }
        {/* CLICKED STORE */}
        {currShop && 
        <div className="store-card">
          <div className="flex center">
            <div className="col">
              {/* NAME */}
              <div onClick={() => addShopHandler(currShop._id)}>
                <p><span className="sigfontL">name: </span>{currShop && 
                  currShop.name}</p>
              </div>
              {/* DISTANCE */}
              <div onClick={() => addShopHandler(currShop._id)}>
                <p><span className="sigfontL">distance: </span>{currShop && addDistToShops.find(el => el.shop._id === currShop._id).distance.toFixed(1) + " km"}</p>
              </div> 
            </div>
          </div>
          <div className=" patch-container">
            <div className="patch-btn-l row">
              <div className="patch-btn bg-gradL center" title="shop infos">
                <p><span className="info">i</span></p>
              </div>
              <div className="patch-btn bg-gradL center">
                <img
                  src={plus} 
                  className="patch-img" 
                  alt="add" 
                  title="add to favorites"
                />
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </div>




          <div>
            {/* LIST OF SHOPS */}
            <div className="scroll-container">
            <div >
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
                            <p><span className="sigfontD">distance: </span>{shops && shop.distance.toFixed(1) + " km"}</p>
                          </div> 
                          <div onClick={()=> navigate(`/showShop/${shop.shop._id}`)}>
                          </div> 
                        </div>
                      </div>
                      <div className=" patch-container">
                        <div className="patch-btn-l row">
                          <div className="patch-btn bg-gradD center">
                            <p><span className="info">i</span></p>
                          </div>
                          <div className="patch-btn bg-gradD center">
                            <img
                              src={plus} 
                              className="patch-img" 
                              alt="add" 
                              title="add to favorites"
                             onClick={() => addShopHandler(currShop._id)}/>
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
      </div>
      </div>
      </div>

    </>
  )
}

export default Shops;