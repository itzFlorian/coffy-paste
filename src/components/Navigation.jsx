import { useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate()
  return (
    <div className="navbarS flex">
        <div
          className="navbar-btn cursor-pointer"
          onClick={() => navigate("/myaccount")}>
            <p> my account</p>
        </div>
        <div
          className="navbar-btn ml1 cursor-pointer"
          onClick={() => navigate("/community")}>
            <p>community</p>
        </div>
        <div
          className="navbar-btn ml1 cursor-pointer"
          onClick={() => navigate("/shops")}>
            <p>shops</p>
        </div>
        <div
          className="navbar-btn ml1 cursor-pointer"
          onClick={() => navigate("/stats")}>
            <p>stats</p>
        </div>
    </div>
  );
};

export default Navigation;