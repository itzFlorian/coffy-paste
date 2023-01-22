// external dependencies
import { useNavigate } from "react-router";
import { host } from "../api/Routes.jsx";
import { useEffect, useState } from "react";

// - - - - - F I L E S - - - - -
import Navigation from "./Navigation.jsx";
import NavigationS from "./NavigationS.jsx";

// images
import searchS from "../images/coffypaste_icon_search_s.png";
import plus from "../images/coffypaste_icon_plus.png";

const Stats = ({ category }) => {
  const navigate = useNavigate();
  const [shops, setShops] = useState();
  const [users, setUsers] = useState();

  // BERECHNEN DER FREUNDSCHAFTEN
  const friendCount = users
    ?.map((user) => {
      return user.friends.length;
    })
    .reduce((a, b) => a + b, 0);

  //BERECHNEN DER POSTS
  const commentCount = shops
    ?.map((shop) => {
      return shop.comments.length;
    })
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    const fetchShops = async () => {
      await fetch(`${host}/coffeeshops`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => json.json())
        .then((data) => setShops(data));
    };

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

    fetchShops();
    fetchUsers();
  }, []);

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
          <button onClick={() => logout()} className="logout-btn cursor-pointer">
            <img src={plus} className="logout" alt="logout" title="log out" />
          </button>
        </div>
      </div>

      <div className="mt splitscreen">
        {/* LEFTSIDE */}
        <div>
          <h1 className="foOW">User Statistics</h1>

          <div className="mt3">
            <h3 className="foOW fo-le mb1">{users?.length}</h3>
            <p className="foOW">Number of users</p>
          </div>

          <div className="mt3">
            <h3 className="foOW fo-le mb1">{friendCount}</h3>
            <p className="foOW">User friendships</p>
          </div>
        </div>

        {/* RIGHTSIDE */}
        <div>
          <h1 className="foOW">Shop Statistics</h1>

          <div className="mt3">
            <h3 className="foOW fo-le mb1">{shops?.length}</h3>
            <p className="foOW">Number of shops</p>
          </div>

          <div className="mt3">
            <h3 className="foOW fo-le mb1">{commentCount}</h3>
            <p className="foOW">Total comments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
