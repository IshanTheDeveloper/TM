import "./header.css";
function Header() {
  return (
    <div className="header-container">
      <div className="company-logo">
        {" "}
        <img
          src="https://www.trademarkia.com/assets/images/logo_trademarkia.png"
          alt="Image not availabe."
        />
      </div>
      <div className="search-bar">
        <img
          src="https://cdn-icons-png.flaticon.com/128/11741/11741045.png"
          alt="Image not availabe"
        />
        <input type="text" placeholder="Search Trademark here" />
        <img src="https://cdn-icons-png.flaticon.com/128/83/83574.png" alt="" />
      </div>
      <div className="search-button">
        <button>Search</button>
      </div>
      <div className="apply-button">
        <button>Apply for Trademark</button>
      </div>
    </div>
  );
}
export default Header;
