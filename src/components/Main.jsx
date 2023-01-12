import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate()

  useEffect(()=> {
    if(true){
      navigate("/welcome")
    }
  },[])

  return (
    <div>
      main
    </div>
  );
};

export default Main;