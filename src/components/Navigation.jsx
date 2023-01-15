import { useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate("/myaccount")}>my account</button>
      <button onClick={()=>navigate("/community")}>community</button>
      <button onClick={()=>navigate("/shops")}>shops</button>
      <button onClick={()=>navigate("/stats")}>stats</button>
    </div>
  );
};

export default Navigation;