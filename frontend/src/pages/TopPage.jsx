import "../assets/styles/css/TopPage.css";
import titleLogo from "../assets/images/icon_header_Alien.svg";
import { Link } from "react-router-dom";

export const TopPage = () => {
  return (
    <div className="screen-start">
      <div className="title-start">
        <div className="maintitle">
          <img src={titleLogo} alt="title logo"></img>
        </div>
        <div className="subtitle">未知との出会い</div>
      </div>

      <Link to="/signup">
        <div className="register">新規登録</div>
      </Link>
      <Link to="/login">
        <div className="login">ログイン</div>
      </Link>
    </div>
  );
};
