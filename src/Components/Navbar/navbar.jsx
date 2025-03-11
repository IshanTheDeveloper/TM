import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-items">
        <img
          src="https://cdn-icons-png.flaticon.com/128/16548/16548756.png"
          alt=""
        />
        <p>Trademarks</p>
      </div>
      <div className="nav-items">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3106/3106921.png"
          alt=""
        />
        <p>Owners</p>
      </div>
      <div className="nav-items">
        <img src="https://cdn-icons-png.flaticon.com/128/88/88506.png" alt="" />
        <p>Logos</p>
      </div>
      <div className="nav-items">
        <img
          src="https://cdn-icons-png.flaticon.com/128/13488/13488581.png"
          alt=""
        />
        <p>Internet Brand Search</p>
      </div>
      <div className="nav-items">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3146/3146117.png"
          alt=""
        />
        <p>Copyrights</p>
      </div>
    </div>
  );
}
export default Navbar;
