import { useNavigate } from "react-router";



import up from "../images/coffypaste_icon_up.png";



const Navigation = ({category}) => {
  const navigate = useNavigate()
  return (
    <div className="navigationCollapse">
      <div
        className="navbar-btn navbarS-container cursor-pointer"
        onClick={() => navigate("/")}>

        <div>
          <p>{category}</p>
            <img src={up} 
            className="search-img" 
            alt="up to main" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
