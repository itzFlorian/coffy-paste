import { useState, useEffect, useContext } from "react";
import { host } from "../api/Routes.jsx";
import Navigation from "./Navigation.jsx";
import { BsPlusCircleFill } from "react-icons/bs" 
import UserContext from "../context/userContext.jsx";

const Community = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [User, setUser] = useContext(UserContext)

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
        await fetch(`${host}/users/${currentUser}`, {
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
        {currentUser.friends && currentUser.friends.map((friend)=>{
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
              <BsPlusCircleFill/>
            </div>
            )
          })}          
        </div>
      </div>
    </div>
  );
};

export default Community;