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
      MAIN
    </div>
  );
};

export default Main;