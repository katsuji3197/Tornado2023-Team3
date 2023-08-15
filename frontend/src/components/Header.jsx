import "../assets/styles/Header.css";
import alienLogo from "../assets/images/icon_header_Alien.svg";
import userLogo from "../assets/images/icon_header_UnknownUser.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-contents">
        <div className="header-contents-logo">
          <a href="#">
            <img src={alienLogo} alt="alien logo" />
          </a>
        </div>

        <div className="header-contents-userImage">
          <a href="#">
            <img src={userLogo} alt="user image" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
