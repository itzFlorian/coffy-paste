// import { useContext } from "react";
// import UserContext from "../context/userContext.jsx";
// import { host } from "../api/Routes.jsx";

// export const checkValidation = async () =>{
//   await fetch(`${host}/users/checklogin`, {
//   credentials:"include",
//   method: 'GET',   
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })
// .then(json => json.json())
// .then(data => {    
//   console.log("data von checkValidation", data);
//   if(data.message){
//     navigate("/")
//     setUser(data.userId)
//   }
// })
// }