// TopPage.jsx
import '../assets/styles/css/TopPage.css'
import titleLogo from '../assets/images/icon_header_Alien.svg'
import { Link } from 'react-router-dom';

export const TopPage = () => {
  return (
    <div className="screen-start">
      <div className="title-start">
        <div className="maintitle">
          <img src={titleLogo} alt="title logo"></img>
        </div>
        <div className="subtitle">未知との出会い</div>
      </div>

      <div className="register"><Link to="/signup">新規登録</Link></div>
      <div className="login"><Link to="/login">ログイン</Link></div>
      
    </div>
  );
}
