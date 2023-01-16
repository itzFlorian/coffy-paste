import { useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate()
  return (
    <div className="flex">

      <div className="space">
        <button
          className="btn"
          onClick={() => navigate("/myaccount")}>my account</button>
        <button
          className="btn"
          onClick={() => navigate("/community")}>community</button>
        <button
          className="btn"
          onClick={() => navigate("/shops")}>shops</button>
        <button
          className="btn"
          onClick={() => navigate("/stats")}>stats</button>
      </div>

    </div>
  );
};

export default Navigation;