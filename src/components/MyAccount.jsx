// import
import UserContext from "../context/userContext.jsx";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { host } from "../api/Routes.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Navigation from "./Navigation.jsx";

// - - - - - I M A G E S - - - - -
import searchS from "../images/coffypaste_icon_search_s.png";
import avatar from "../images/coffypaste_icon_avatar.png";
import coffee from "../images/coffypaste_icon_coffee_default.png";
import minus from "../images/coffypaste_icon_minus.png";
import plus from "../images/coffypaste_icon_plus.png";

const MyProfile = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState();
  const [currentUserId, setCurrentUserId] = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState({});
  const [showButton, setShowButton] = useState(false);
  const [editUser, setEditUser] = useState(true);
  const [trigger, setTrigger] = useState(true);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    theme: "dark",
  };

  const handleInput = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    const fetchUser = async () => {
      await fetch(`${host}/users/${currentUserId}`, {
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
  }, [trigger]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateUserData = async () => {
      await fetch(`${host}/users/${currentUserId}`, {
        credentials: "include",
        method: "PATCH",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => {
          if (data.error) {
            data.error.map((err) => {
              toast.error(err.msg, toastOptions);
            });
          }
        });
    };
    updateUserData();
    setShowButton(!showButton);
  };
  const handleEditUser = () => {
    setEditUser(!editUser);
    setShowButton(!showButton);
  };
  const removeShopHandler = async (shop) => {
    await fetch(`${host}/coffeeshops/favshop/${shop}`, {
      credentials: "include",
      method: "DELETE",
      body: JSON.stringify({ shopId: shop, userId: currentUserId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((json) => json.json())
      .then((data) => {
        toast.success(data.message, toastOptions);
        setTrigger(!trigger);
      });
  };


  // LOGOUT 
  const logout = async () => {
    await fetch(`${host}/users/logout`, {
      credentials:"include",
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(json => {
      if(json.ok) {
        navigate("/welcome")
      }
    })
  }

  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="flex">
          <button className="search-btn">
            <img src={searchS} className="search-img" alt="search" />
          </button>
          <button 
            onClick={() => logout()}
            className="logout-btn">
            <img src={plus} className="logout" alt="logout" />
          </button>
        </div>
      </div>

      <div className="mt">
        <div className="splitscreen">
          <div>
            {/* L E F T S I D E */}
            <h1>my profile</h1>
            <div className="flex">
              {/* icons */}
              <div className="flex mb1">
                <div className="iconL center col">
                  <img src={avatar} alt="avatar-icon" />
                </div>
                <div className="iconL center col ml1">
                  <img src={coffee} alt="avatar-icon" />
                </div>
              </div>
              {/* text */}
              <div className="flex col ml1">
                <div>
                  <p className="foOW mb1">user:</p>
                  <h3 className="foOW">"{currentUser.userName}"</h3>
                </div>
                <div className="mt2">
                  <p className="foOW mb1">coffy:</p>
                  <h3 className="foOW">{currentUser.myFavCoff}</h3>
                </div>
              </div>
            </div>
            {/* FORM-CONTAINER */}

            <form onSubmit={handleSubmit} className="col">
              <input
                onChange={handleInput}
                type="text"
                disabled={editUser}
                placeholder={currentUser.userName}
                name="userName"
                className="card"
              />
              <input
                onChange={handleInput}
                type="text"
                disabled={editUser}
                placeholder={currentUser.city}
                name="city"
                className="card"
              />
              <input
                onChange={handleInput}
                type={editUser ? "hidden" : "password"}
                disabled={editUser}
                placeholder="password"
                name="password"
                className="card"
              />
              <input
                onChange={handleInput}
                disabled={editUser}
                type="text"
                placeholder={`I like my coffee ${currentUser.myFavCoff}`}
                name="myFavCoff"
                className="card"
              />
              <div className="center">
                {!showButton && (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleEditUser}
                  >
                    {editUser ? "edit my profile" : "close"}
                  </button>
                )}
                {showButton && (
                  <button
                    type="submit"
                    className="btn"
                    onClick={() => setEditUser(!editUser)}
                  >
                    update profile
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* R I G H T S I D E */}
          <div className="scroll-container">
            <>
              {/* TOP-STORE-CONTAINER */}
              <div>
                <h1>
                  my top stores:
                  {currentUser?.topShops && currentUser.topShops.length}
                </h1>
                {currentUser?.topShops &&
                  currentUser.topShops.map((shop) => {
                    return (
                      <>
                        <div className="store-card" key={shop._id}>
                          <div className="flex center">
                            {/* <div className="iconS bg-gradL">
                              <img
                                src={shop.avatar}
                                className="avatar-icon"
                                onClick={() => navigate(`showShop/${shop._id}`)}
                              />
                            </div> */}
                            <div className="col">
                              <p>{shop.name}</p>
                              {/* <p>{shop.ratings}</p> */}
                            </div>
                          </div>
                          <div className="patch-container">
                            <div className="patch-btn-l row">
                              <div className="patch-btn bg-gradL center">
                                <img
                                  src={minus}
                                  className="patch-img"
                                  alt=""
                                  onClick={() => removeShopHandler(shop._id)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                <div>
                  <h1>my comments</h1>
                </div>
                <div className="card">
                  {currentUser?.comments &&
                    currentUser.comments.map((comment) => {
                      return (
                        <>
                          <div className="store-card" key={comment._id}>
                            <div className="flex center">
                              <div className="col">
                                <p>{comment.comment}</p>
                              </div>
                            </div>
                            <div className="patch-container"></div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default MyProfile;
