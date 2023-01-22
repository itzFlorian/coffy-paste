import { useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="navbarS flex">
      <div
        className="navbar-btn cursor-pointer"
        onClick={() => navigate("/myaccount")}
        title="see & edit your account"
      >
        <p> my account</p>
      </div>
      <div
        className="navbar-btn ml1 cursor-pointer"
        onClick={() => navigate("/community")}
        title="meet the coffy-paste community"
      >
        <p>community</p>
      </div>
      <div
        className="navbar-btn ml1 cursor-pointer"
        onClick={() => navigate("/shops")}
        title="see the coffy-paste shops"
      >
        <p>shops</p>
      </div>
      <div
        className="navbar-btn ml1 cursor-pointer"
        onClick={() => navigate("/stats")}
        title="coffy-paste statistics"
      >
        <p>stats</p>
      </div>
    </div>
  );
};

export default Navigation;
