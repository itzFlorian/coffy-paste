import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { host } from "../api/Routes.jsx";

const Main = () => {
  const navigate = useNavigate()

  useEffect(()=> {
    const checkvalidation = async () =>{
      await fetch(`${host}/users/checklogin`, {
      credentials:"include",
      method: 'GET',   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => {
      if(data.status !== "200"){
        console.log("not ok");
        navigate("/welcome")
      }
    })
    }
    checkvalidation()
  },[])

  return (
    <div>
      MAIN
    </div>
  );
};

export default Main;