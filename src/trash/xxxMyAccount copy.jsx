// - - - - - F I L E S - - - - -
import Navigation from "../Navigation.jsx";


// - - - - - I M A G E S - - - - -
import searchS from "../images/coffypaste_icon_search_s.png"
import avatar from "../images/coffypaste_icon_avatar.png"
import coffee from "../images/coffypaste_icon_coffee_default.png"




const MyAccount = () => {


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


      {/* MY-POFILE-CONTAINER */}
      <>
        <div>
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
        </div>
        {/* form */}
        <div className="form">
          <form className="col" >
            <input
              type="text"
              placeholder="username"
              name="userName"
              className="card"
            />
            <input
              type="text"
              placeholder="city"
              name="city"
              className="card"
            />        
            <input
              type="text"
              placeholder="email"
              name="email"
              className="card"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              className="card"
            />
            <input
              type="password"
              placeholder="confirm password"
              name="confirm-password"
              className="card"
            />
            <input
            type="text"
            placeholder="your favorite coffee"
            name="favCoffee"
            className="card"
          />
            <div className="center">
              <button
                type="submit"
                className="btn">edit my profile
              </button>
            </div>
          </form>
        </div>
      </>

      <>
        <h1>my top stores</h1>
        <div>

        </div>
      </>


    </>
  );
};

export default MyAccount;