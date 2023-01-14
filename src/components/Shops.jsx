// // I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
// import React from 'react'
// import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
// import { useState } from "react";
// import Geocode from "react-geocode";

// // Get latitude & longitude from address. // Google API
// Geocode.fromAddress("Solingen").then(
//   (response) => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   (error) => {
//     console.error(error);
//   }
// );



// function MyMap({ allShops, user }) {
//   const [isShown, setIsShown] = useState(false);

//   const shopsFiltered = allShops.filter(shop => {
//     return (
//       // Filter shops with range from longitude and latitude
//     )
//   })

//   const overlayHandler = (e) => {
//     setIsShown(current => !current);
//   }

//   // [latitude, longitude]
//   return (
//     <>
//       <Map height={600} defaultCenter={[user.latitude, user.longitude]} defaultZoom={4}>
//         {providerFiltered.map((prov, i) => {
//           return (      
//             <Marker
//               width={30}
//               anchor={[shop.latitude, shop.longitude]}
//               key={i}
//               onClick={(e) => overlayHandler(e)}
//             />
//           )
//         })}
//         {isShown && (allShops.map((shop, i) => {
//           return (
//             <Overlay 
//               anchor={[shop.latitude, shop.longitude]} 
//               offset={[120, 79]}>
//               <div width={240} height={158} alt=''>
//                 {prov.name}
//               </div>
//             </Overlay>
//           )
//         }))}
//         <ZoomControl />
//       </Map>
//       <div>
//         <ul>
//           {/* shopsFiltered.map((shop) => li) */}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default MyMap;

// export default Shops;