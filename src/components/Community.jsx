import { useState, useEffect, useContext } from "react";
import { host } from "../api/Routes.jsx";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/userContext.jsx";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Navigation from "./Navigation.jsx";
import NavigationS from "./NavigationS.jsx";

// - - - - - I M A G E S - - - - -
import searchS from "../images/coffypaste_icon_search_s.png";
import heart from "../images/coffypaste_icon_heart.png";
import plus from "../images/coffypaste_icon_plus.png";
import minus from "../images/coffypaste_icon_minus.png";
import avatar from "../images/coffypaste_icon_avatar.png";

const Community = ({ category }) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [trigger, setTrigger] = useState(false);
  const [user, setUser] = useContext(UserContext);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    theme: "dark",
  };

  useEffect(() => {
    const checkValidation = async () => {
      await fetch(`${host}/users/checklogin`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => {
          if (!json.ok) {
            navigate("/welcome");
          }
          return json.json();
        })
        .then((data) => {
          setUser(data.userId);
        });
    };
    checkValidation();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch(`${host}/users/`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => {
          setUsers(data);
        });
    };

    const fetchUser = async () => {
      await fetch(`${host}/users/${user}`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => {
          setCurrentUser(data);
        });
    };
    fetchUser();
    fetchUsers();
  }, [trigger]);

  const addFriendHandler = async (friend) => {
    console.log(friend, user);
    await fetch(`${host}/users/friends`, {
      credentials: "include",
      method: "PATCH",
      body: JSON.stringify({ friend: friend, user: user }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((json) => json.json())
      .then((data) => {
        toast.info(data.message, toastOptions);
      });
    setTrigger(!trigger);
  };

  const deleteFriendHandler = async (friend) => {
    await fetch(`${host}/users/friends`, {
      credentials: "include",
      method: "DELETE",
      body: JSON.stringify({ friend: friend, user: user }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((json) => json.json())
      .then((data) => {
        toast.info(data.message, toastOptions);
      });
    setTrigger(!trigger);
  };

  // LOGOUT
  const logout = async () => {
    await fetch(`${host}/users/logout`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((json) => {
      if (json.ok) {
        navigate("/welcome");
      }
    });
  };

  return (
    <>
      <div className="flex">
        <Navigation />
        <NavigationS category={category} />

        <div className="flex">
          <button className="search-btn">
            <img src={searchS} className="search-img" alt="search" />
          </button>
          <button onClick={() => logout()} className="logout-btn">
            <img src={plus} className="logout" alt="logout" title="log out" />
          </button>
        </div>
      </div>

      {/* SPLITSCREEN */}
      <div className="mt">
        <div className="splitscreen">
          <div className="scroll-container">
            <div className="rotate">
              <h1>
                my friends: {currentUser?.friends && currentUser.friends.length}{" "}
              </h1>
            </div>
            {currentUser?.friends &&
              currentUser.friends.map((friend) => {
                console.log(friend);
                return (
                  <>
                    <div className="store-card" key={friend._id}>
                      <div
                        className="flex center"
                        onClick={() => navigate(`showUser/${friend._id}`)}
                      >
                        <div className="iconS bg-gradL">
                          <img src={avatar} className="avatar-icon" />
                        </div>
                        <div className="col">
                          <p className="foBL">
                            name:{" "}
                            <span className="foBE">{friend.userName}</span>
                          </p>
                          <p className="foBL">
                            fav coffy:{" "}
                            <span className="foBE">{friend.myFavCoff}</span>
                          </p>
                          <p>
                            city: <span className="foBE">{friend.city}</span>
                          </p>
                        </div>
                      </div>
                      <div className="patch-container">
                        <div className="patch-btn-l row">
                          <div className="patch-btn bg-gradL center">
                            <img
                              src={minus}
                              className="patch-img"
                              alt=""
                              onClick={() => deleteFriendHandler(friend._id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>

          <div className="scroll-container">
            <h1>all users: {users && users.length}</h1>
            <div>
              {users &&
                users.map((user) => {
                  return (
                    <div className="store-card" key={user._id}>
                      <div
                        className="flex center"
                        onClick={() => navigate(`showUser/${user._id}`)}
                      >
                        <div className="iconS bg-gradD">
                          <img
                            src={avatar}
                            className="avatar-icon"
                            onClick={() => navigate(`showUser/${user._id}`)}
                          />
                        </div>
                        <div className="col">
                          <p>
                            name: <span className="foBR">{user.userName}</span>
                          </p>
                          <p>
                            fav coffy:{" "}
                            <span className="foBR">{user.myFavCoff}</span>
                          </p>
                          <p>
                            city: <span className="foBR">{user.city}</span>
                          </p>
                        </div>
                      </div>
                      <div className=" patch-container">
                        <div className="patch-btn-l row">
                          <div className="patch-btn bg-gradD center">
                            <img
                              src={plus}
                              className="patch-img"
                              alt=""
                              onClick={() => addFriendHandler(user._id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};
// };

export default Community;
