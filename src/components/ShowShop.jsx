import "../styles/show-shop.scss"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { host } from "../api/Routes.jsx";

import searchS from "../images/coffypaste_icon_search_s.png";
import coffee from "../images/coffypaste_icon_coffee_default.png";

// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";
import {SiSocketdotio} from "react-icons/si"
import {AiOutlineWifi} from "react-icons/ai"
import {TbToiletPaper} from "react-icons/tb"
import {BsFillTelephoneForwardFill} from "react-icons/bs"


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// images
import plus from "../images/coffypaste_icon_plus.png";

const ShowShop = () => {
  const {id} = useParams()
  const [rating, setRating] = useState(undefined)
  const [text, setText] = useState(undefined)
  const [currentShop, setCurrentShop] = useState(undefined)
  const [trigger, setTrigger] = useState(false)


  const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  theme: "dark",
};


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
  }, [trigger]);      

  const sendRatingHandler = () => {   
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
    .then((json) => {
      setTrigger(!trigger)
      setRating(undefined)
    });
  }
  
    const sendComment = async () => {    
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
    .then((json) => {
      setText("")
      setTrigger(!trigger)
    });
  }
  toast.info("You rated this Shop", toastOptions)
  sendComment()
  sendRating()
}

// ZIEHE DIE RATINGS RAUS UM SPÄTER DRÜBER ZU REDUCEN
  const ratings = currentShop && currentShop.rating.map((rating)=>{
    return rating.rating
  })

  return (
    <div>      
      <Navigation/>
      {currentShop &&
      <>
        <div className="nameOfTheShop">
          <h1>{currentShop.name}</h1>
        </div>
        <div className="shop-container">
          <p>rating: {"⭐".repeat((ratings.reduce((a,b)=> a+b, 0) / currentShop.rating.length).toFixed())}</p>
          <p>
            address: {`${currentShop.location.address.street} ${currentShop.location.address.number} ${currentShop.location.address.zip} ${currentShop.location.address.city}`}
          </p>  
          <div className="extras">
            <h1>services</h1>
            {currentShop.services.has_sockets && <SiSocketdotio className="service-icons"/>}
            {currentShop.services.has_wifi && <AiOutlineWifi className="service-icons"/>}
            {currentShop.services.has_toilet && <TbToiletPaper className="service-icons"/>}
            {currentShop.services.can_take_calls && <BsFillTelephoneForwardFill className="service-icons"/>}
          </div>
        </div>
        <div className="comment-container">
          <h1>post a comment</h1>
          <textarea onChange={()=> setText(event.target.value)} name="comment" cols="45" rows="10" value={text}></textarea>
          <div className="rating">
            <h1>rating</h1>
            <button onClick={()=> setRating(1)}>⭐</button>
            <button onClick={()=> setRating(2)}>⭐</button>
            <button onClick={()=> setRating(3)}>⭐</button>
            <button onClick={()=> setRating(4)}>⭐</button>
            <button onClick={()=> setRating(5)}>⭐</button>
          </div>
          <button onClick={sendRatingHandler}>send</button>
        </div>
      </>        
      }
      <h1>read comments</h1>
      {currentShop?.comments.map((comment)=>{
        return (
          <div key={comment._id}>
            <div>{comment.comment}</div>
            <div>{comment.createdAt}</div>
          </div>
        )
      })}
      <ToastContainer/>
    </div>
  );
};

export default ShowShop;
