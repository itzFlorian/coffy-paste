import { useNavigate } from "react-router";



import up from "../images/coffypaste_icon_up.png";



const Navigation = ({category}) => {
  const navigate = useNavigate()
  return (
    <div className="navigationCollapse">
      <div
        className="navbar-btn flex relative cursor-pointer"
        onClick={() => navigate("/")}>


        <div className="y flex absolute">
          <p>{category}</p>
          <img src={up} 
          className="x search-img absolute" 
          alt="up to main" />
        </div>


      </div>
    </div>
  );
};

export default Navigation;
