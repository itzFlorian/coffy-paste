import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { host } from "../api/Routes.jsx";

import searchS from "../images/coffypaste_icon_search_s.png";
import coffee from "../images/coffypaste_icon_coffee_default.png";

// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";



// images
import plus from "../images/coffypaste_icon_plus.png";

const ShowShop = () => {
  const {id} = useParams()
  const [rating, setRating] = useState(undefined)
  const [text, setText] = useState(undefined)
  const [currentShop, setCurrentShop] = useState(undefined)

  useEffect(() => {
    const fetchShop = async () => {

      await fetch(`${host}/coffeeshops/${id}`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => {
          setCurrentShop(data);
        });
    };
    fetchShop();
  }, []);      

  const sendRatingHandler = () => {
    console.log(currentShop._id);
    console.log(rating);    
    const sendRating = async () => {
      await fetch(`${host}/ratings`, {
        credentials:"include",
        method: 'POST',
        body: JSON.stringify({
        shopId: currentShop._id,
        rating: rating
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  
  const sendComment = async () => {
    console.log(currentShop._id);
    console.log(text);  
    await fetch(`${host}/comments`, {
      credentials:"include",
      method: 'POST',
      body: JSON.stringify({
      shopId: currentShop._id,
      comment: text
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}
  sendComment()
  sendRating()
}


const ratings = currentShop && currentShop.rating.map((rating)=>{
  return rating.rating
})
console.log(ratings);


  if(currentShop){
    const { location, services, name, comments, espresso_price, img_url, rating, seats, _id } = currentShop
  }
  return (
    <div>      
      <Navigation/>
      {currentShop &&
      <>
        <div className="nameOfTheShop">
          <h1>{currentShop.name}</h1>
        </div>
        <div className="shop-container">
          <p>rating: {ratings.reduce((a,b)=> a+b, 0) / currentShop.rating.length}</p>
          <p>
            address: {`${currentShop.location.address.street} ${(Math.random()*100).toFixed()} ${currentShop.location.address.zip} ${currentShop.location.address.city}`}
          </p>  
          <div className="extras">
            {currentShop.services.has_sockets && "Bild für sockets"}
            {currentShop.services.has_wifi && "Bild für wifi"}
            {currentShop.services.has_toilet && "Bild für toilet"}
            {currentShop.services.can_take_calls && "Bild für take calls"}
          </div>
        </div>
        <div className="comment-container">
          <h1>post a comment</h1>
          <textarea onChange={()=> setText(event.target.value)} name="comment" cols="45" rows="10"></textarea>
          <div className="rating">
            <h1>rating</h1>
            <button onClick={()=> setRating(1)}>1</button>
            <button onClick={()=> setRating(2)}>2</button>
            <button onClick={()=> setRating(3)}>3</button>
            <button onClick={()=> setRating(4)}>4</button>
            <button onClick={()=> setRating(5)}>5</button>
          </div>
          <button onClick={sendRatingHandler}>send</button>
        </div>
      </>        
      }
    </div>
  );
};

export default ShowShop;
