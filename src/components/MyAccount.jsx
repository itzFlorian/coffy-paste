import avatar from "/src/images/coffypaste_icon_avatar.png";
import coffee from "/src/images/coffypaste_icon_coffee_default.png";
import UserContext from "../context/userContext.jsx";
import { useContext } from "react";

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
      <h2>my profile</h2>
      <div className="row">
        <div className="icon">
          <img src={avatar} />
        </div>
        <div className="icon">
          <img src={coffee} />
        </div>
        <p>"spiced caramel latte"</p>
      </div>
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
  );
};

export default MyProfile;
