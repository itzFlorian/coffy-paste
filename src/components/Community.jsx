import Navigation from "./Navigation.jsx";
import { useState, useEffect, useContext } from "react";
import { host } from "../api/Routes.jsx";
import { BsPlusCircleFill } from "react-icons/bs" 
import { useNavigate } from "react-router-dom";

import UserContext from "../context/userContext.jsx";


// - - - - - I M A G E S - - - - -
import searchS from "../images/coffypaste_icon_search_s.png"
import heart from "../images/coffypaste_icon_heart.png"
import plus from "../images/coffypaste_icon_plus.png"
import avatar from "../images/coffypaste_icon_avatar.png"


const Community = () => {
  const navigate = useNavigate()
  
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState()

  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    const checkValidation = async () =>{
      await fetch(`${host}/users/checklogin`, {
      credentials:"include",
      method: 'GET',   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => {
      if(!json.ok){
          navigate("/welcome")
        }
        return json.json()
    })
    .then(data => {
      console.log(data);
      setUser(data.userId)
    })
    }
    checkValidation()
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch(`${host}/users/`, {
        credentials:"include",
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(json => json.json())
      .then(data => {
       setUsers(data)
      })
      }

      const fetchUser = async () => {
        await fetch(`${host}/users/${user}`, {
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
      fetchUsers()
  },[])
  
  const addFriendHandler = async (friend) => {
    console.log(friend, user);
    await fetch(`${host}/users/addFriend`, {
      credentials:"include",
      method: 'POST',
      body: JSON.stringify({friend: friend, user:user}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => {})
  }

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

      {/* ORIGINAL-CODE */}
      <div className="my-friends-container">
        <h1>my friends({currentUser?.friends && currentUser.friends.length})</h1>

        {/* MUSTER-FRIEND */}
        <div className="store-card">
          <div className="flex center">
            <div className="iconS bg-gradL">
              <img src={avatar} className="avatar-icon"/>
            </div>
            <div className="col">
              <p>friend-name</p>
              <p>friend-coffee</p>
            </div>
          </div>
          <div className=" patch-container">
            <div className="patch-btn-l row">
              <div className="patch-btn bg-gradL center">
                <img src={heart} className="patch-img" alt="" />
              </div>
            </div>
          </div>
        </div>
        
        {/* ORIGINAL-CODE */}
        {currentUser?.friends && currentUser.friends.map((event)=>{
          return (
            <>
              <div>
                <img src={friend.avatar} alt="avatar" />
                <p>{friend.userName}</p>
                <p>{friend.favCoffee}</p>
                <BsPlusCircleFill/>
              </div>
            </>
          )
        })}
      </div>


      {/* ORIGINAL-CODE */}
      <div className="all-users-container">
        <h1>all users({users && users.length})</h1>

        {/* MUSTER-USER */}
        <div className="store-card">
          <div className="flex center">
            <div className="iconS bg-gradD">
              <img src={avatar} className="avatar-icon"/>
            </div>
            <div className="col">
              <p>user-name</p>
              <p>user-coffee</p>
            </div>
          </div>
          <div className=" patch-container">
            <div className="patch-btn-l row">
              <div className="patch-btn bg-gradD center">
                <img src={plus} className="patch-img" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* ORIGINAL-CODE */}
        <div>
          {users && users.map((user)=>{
            return(
            <div key={user._id}>
              <img src={user.avatar} alt="avatar" />
              <p>{user.userName}</p>
              <p>{user.favCoffee}</p>
              <BsPlusCircleFill onClick={() => addFriendHandler( user._id)}/>
            </div>
            )
          })}          
        </div>
      </div>
    </>
  );
};

export default Community;