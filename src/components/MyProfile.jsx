import avatar from "/src/images/coffypaste_icon_avatar";
import coffee from "/src/images/coffypaste_icon_coffee_default.png";

const MyProfile = () => {
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
