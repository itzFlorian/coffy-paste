// - - - - - T E C H - - - - 
import UserContext from "../context/userContext.jsx";
import { useContext, useState } from "react";


// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";


// - - - - - I M A G E S - - - - -
import searchS from "../images/coffypaste_icon_search_s.png"
import avatar from "../images/coffypaste_icon_avatar.png"
import coffee from "../images/coffypaste_icon_coffee_default.png"


const MyProfile = () => {
  const [userData, setUserData] = useState();
  const [currentUser, setCurrentUser] = useContext(UserContext);
  console.log(currentUser);
  const handleInput = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateUserData = async () => {
      await fetch(`${host}/users/`, {
        credentials: "include",
        method: "PUT",
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
    sendData();
  };

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
                <p>my favorite coffee</p>
                <p>my name</p>
              </div>
            </div>
          </>

          {/* FORM-CONTAINER */}
          <form onSubmit={handleSubmit} className="col">
            <input
              onChange={handleInput}
              type="text"
              placeholder="my username"
              name="my userName"
              className="card"
            />
            <input
              onChange={handleInput}
              type="text"
              placeholder="my city"
              name="my city"
              className="card"
            />
            <input
              onChange={handleInput}
              type="text"
              placeholder="my e-mail-address"
              name="my e-mail-address"
              className="card"
            />
            <input
              onChange={handleInput}
              type="password"
              placeholder="my password"
              name="my password"
              className="card"
            />
            <div className="center">
              <button type="submit" className="btn">
                edit my profile
              </button>
            </div>
          </form>
        </>


        {/* R I G H T S I D E */}
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
                  <div className="patch-btn bg-gradL">
                    <p>heart</p>
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
                  <div className="patch-btn bg-gradL">
                    <p>heart</p>
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
                  <div className="patch-btn bg-gradL">
                    <p>heart</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOP-STORE-CONTAINER */}
            <div>
              <h1>my comments</h1>
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, veniam?</p>
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, veniam?</p>
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, veniam?</p>
            </div>

          </div>
        </>
      </div>
    </>
  );
};

export default MyProfile;
