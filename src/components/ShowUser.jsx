import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { host } from "../api/Routes.jsx";

import Navigation from "./Navigation.jsx";

// images
import searchS from "../images/coffypaste_icon_search_s.png";
import coffee from "../images/coffypaste_icon_coffee_default.png";
import plus from "../images/coffypaste_icon_plus.png";
import avatar from "--/images/coffypaste_icon_avatar.png";

const ShowUser = () => {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      await fetch(`${host}/users/${id}`, {
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
  }, []);

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
      <div className=" flex">
        <Navigation />
        <div className="flex">
          <button 
            onClick={() => logout()}
            className="search-btn">
            <img src={searchS} className="search-img" alt="search" />
          </button>
          <button className="logout-btn">
            <img src={plus} className="logout" alt="logout" />
          </button>
        </div>
      </div>

      <div className="mt">
        <div className="splitscreen">
          {/* L E F T S I D E */}
          <div>
            <>
              {/* POFILE-CONTAINER */}
              <>
                <div>
                  <h1>" {currentUser.userName}" </h1>
                </div>
                <div className="flex">
                  <div className="iconS">
                    <img src={avatar} alt="avatar-icon" />
                  </div>
                  <div className="ml1 col">
                    <p className="sigfontW">stadt: </p>
                    <h3 className="sigfontW">{currentUser.city}</h3>
                  </div>
                </div>

                <div className="flex mt1">
                  {/* icons */}
                  <div className="flex">
                    <div className="iconS">
                      <img src={coffee} alt="avatar-icon" />
                    </div>
                  </div>
                  <div className="ml1 col">
                    <p className="sigfontW">lieblingskaffee: </p>
                    <h3 className="sigfontW">{currentUser.myFavCoff}</h3>
                  </div>
                </div>
              </>
            </>
          </div>

          {/* R I G H T S I D E */}
          <>
            {/* TOP-STORE-CONTAINER */}
            <div className="scroll-container">
              <div>
                <h1>my top stores</h1>

                {currentUser?.topShops &&
                  currentUser.topShops.map((shop) => {
                    console.log(shop);
                    return (
                      <div className="store-card">
                        <div className="col">
                          <p>{shop.name}</p>
                          <p>
                            address:{" "}
                            {`${shop.location.address.street} ${shop.location.address.zip} ${shop.location.address.city} `}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                {/* COMMENT-CONTAINER */}
                <div>
                  <h1>my comments</h1>
                </div>
                {currentUser?.comments &&
                  currentUser.comments.map((comment) => {
                    return (
                      <>
                        <div className="card">
                          <p>{comment.comment}</p>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
