import { useParams } from "react-router";

const ShowShop = () => {
  const {id} = useParams()
  return (
    <div>
      <p>{id}</p>
    </div>  
  );
};

export default ShowShop;