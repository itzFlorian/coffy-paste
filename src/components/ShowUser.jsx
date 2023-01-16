import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { host } from "../api/Routes.jsx";

import Navigation from "./Navigation.jsx";


import searchS from "../images/coffypaste_icon_search_s.png"
import avatar from "../images/coffypaste_icon_avatar.png"
import coffee from "../images/coffypaste_icon_coffee_default.png"


const ShowUser = () => {
  const { id } = useParams()
  const [currentUser, setCurrentUser] = useState({})

  useEffect(()=> {
    const fetchUser = async () => {
      await fetch(`${host}/users/${id}`, {
        credentials:"include",
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(json => json.json())
      .then(data => {
       setCurrentUser(data)
      })
      }
    fetchUser()
  },[])

  const handleInput =() => {

  }

  const handleSubmit = () => {

  }
 
console.log(currentUser);
  return (

    <>
    <div className="flex">
      <Navigation />
      <div className="">
        <button className="search-btn">
          <img src={searchS} className="search-img" alt="search" />
        </button>
      </div>
    </div>


    <div className="x scroll-container">
      {/* L E F T S I D E */}
      <>
        {/* POFILE-CONTAINER */}
        <>
          <h1>user details</h1>
          <div className="flex">
            {/* icons */}
            <div className="flex">
              <div className="iconS">
                <img src={currentUser.avatar} alt="avatar-icon" />
              </div>
              <div className="iconS">
                <img src={coffee} alt="avatar-icon" />
              </div>
            </div>
            {/* text */}
            <div className="flex col">
              <p>{currentUser.myFavCoff}</p>
              <p>{currentUser.userName}</p>
            </div>
          </div>
        </>

        {/* FORM-CONTAINER */}
        <form onSubmit={handleSubmit} className="col">
          <p>{currentUser.userName}</p>
          <p>{currentUser.city}</p>
        </form>
      </>


      {/* R I G H T S I D E */}
      <>

        {/* TOP-STORE-CONTAINER */}
        <div>
          <h1>my top stores</h1>

          {/* TOP-STORE */}
          {currentUser?.shops && currentUser.shops.map(()=>{
            <div className="store-card flex">
              <div className="col">
                <p>store</p>
                <p>adresse</p>
              </div>
              <div className="patch-container">
                <div className="patch-btn-l row">
                  <div className="patch-btn bg-gradL">
                    <p>heart</p>
                  </div>
                </div>
              </div>
            </div>
          })}        

          {/* COMMENT-CONTAINER */}
          <div>
            <h1>my comments</h1>
          </div>
          {currentUser?.comments && currentUser.comments.map((comment)=>{
            <>
              <div className="card">
                <p>{comment.text}?</p>
              </div>              
            </>
          })}

        </div>
      </>
    </div>
  </>
  );
};

export default ShowUser;