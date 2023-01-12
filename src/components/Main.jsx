import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Main = () => {
  //ZUM SIMULIEREN DAS KEIN COOKIE DA IST.. WIRD SPÄTER GELÖSCHT
  const [isLogin, setIsLogIn] = useState(false)
  const navigate = useNavigate()
  useEffect(()=> {
    if(!isLogin){
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