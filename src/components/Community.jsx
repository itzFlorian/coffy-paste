import { useState, useEffect, useContext } from "react";
import { host } from "../api/Routes.jsx";
import Navigation from "./Navigation.jsx";
import { BsPlusCircleFill } from "react-icons/bs" 
import UserContext from "../context/userContext.jsx";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [user, setUser] = useContext(UserContext)

  useEffect(()=> {
    const checkValidation = async () =>{
      await fetch(`${host}/users/checklogin`, {
      credentials:"include",
      method: 'GET',   
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => {    
      console.log("data von checkValidation", data);
      if(data.message){
        setUser(data.userId)
      }
    })
    }
    checkValidation()
  },[])

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

  const addFriendHandler = async (event, friend) => {
    console.log(friend, user);
    await fetch(`${host}/users/addFriend`, {
      credentials:"include",
      method: 'POST',
      body: JSON.stringify({friend: friend, user:currentUser}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => json.json())
    .then(data => {})
  }

  return (
    <div>
      <div className="nav-bar">
        <Navigation/>
        <div className="search">
          <button>LUPE</button>
        </div>
      </div>
      <div className="my-friends-container">
        <h3>my friends{currentUser.friends && currentUser.friends.length}</h3>
        {currentUser.friends && currentUser.friends.map((event)=>{
          return (
            <div>
              <img src={friend.avatar} alt="avatar" />
              <p>{friend.userName}</p>
              <p>{friend.favCoffee}</p>
              <BsPlusCircleFill/>
            </div>
          )
        })}
      </div>
      <div className="all-users-container">
        <h3>all users</h3>
        <div>
          {users && users.map((user)=>{
            return(
            <div key={user._id}>
              <img src={user.avatar} alt="avatar" />
              <p>{user.userName}</p>
              <p>{user.favCoffee}</p>
              <BsPlusCircleFill onClick={() => addFriendHandler(event, user._id)}/>
            </div>
            )
          })}          
        </div>
      </div>
    </div>
  );
};

export default Community;