// Header.jsx
import '../assets/styles/css/Header.css';
import alienLogo from '../assets/images/icon_header_Alien.svg';
import userLogo  from '../assets/images/icon_header_UnknownUser.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-contents">
      
        <div className="header-contents-logo">
          <img src={alienLogo} alt="alien logo" />
        </div>
        
        <div className="header-contents-userImage">
          <img src={userLogo}  alt="user image" />
        </div>
      </div>
      
    </header>
  );
}
