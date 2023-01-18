// import
import UserContext from "../context/userContext.jsx";
import { useContext, useState, useEffect } from "react";
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
  const [userData, setUserData] = useState();
  const [currentUserId, setCurrentUserId] = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState({});
  const [showButton, setShowButton] = useState(false);
  const [editUser, setEditUser] = useState(true);
  const [trigger, setTrigger] = useState(true);

  console.log(currentUserId);
  console.log(currentUser);
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
  console.log(currentUser);

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
          console.log(data);
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
        toast.info(data.message, toastOptions);
        setTrigger(!trigger);
      });
  };

  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="flex">
          <button className="search-btn">
            <img src={searchS} className="search-img" alt="search" />
          </button>
          <button className="logout-btn">
            <img src={plus} className="logout" alt="logout" />
          </button>
        </div>
      </div>

    <div className="mt">
      <div className="x splitscreen">
        <div>
          {/* L E F T S I D E */}
          <h1>my profile</h1>
          <div className="flex">
            {/* icons */}
            <div className="flex">
              <div className="iconS">
                <img src={avatar} alt="avatar-icon" />
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
              type="text"
              disabled={editUser}
              placeholder={currentUser.email}
              name="email"
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
                <button type="button" className="btn" onClick={handleEditUser}>
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
            <h1>my top stores</h1>

            {/* TOP-STORE-1 */}
            <div className="store-card flex">
              <div className="col">
                <p>store</p>
                <p>adresse</p>
              </div>
              <div className="patch-container">
                <div className="patch-btn-l row">
                  <div className="patch-btn bg-gradL center">
                    <img src={minus} className="patch-img" />
                  </div>
                </div>
              </div>
            </div>
            {/* TOP-STORE-2 */}
            <div className="store-card flex">
              <div className="col">
                <p>store</p>
                <p>adresse</p>
              </div>
              <div className="patch-container">
                <div className="patch-btn-l row">
                  <div className="patch-btn bg-gradL center">
                    <img src={minus} className="patch-img" />
                  </div>
                </div>
              </div>
            </div>
            {/* TOP-STORE-3 */}
            <div className="store-card flex">
              <div className="col">
                <p>store</p>
                <p>adresse</p>
              </div>
              <div className="patch-container">
                <div className="patch-btn-l row">
                  <div className="patch-btn bg-gradL center">
                    <img src={minus} className="patch-img" />
                  </div>
                </div>
              </div>
            </div>

            {/* TOP-STORE-CONTAINER */}
            <div>
              <h1>my comments</h1>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita, veniam?
              </p>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita, veniam?
              </p>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita, veniam?
              </p>
            </div>
          </div>
        </>
      </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MyProfile;
