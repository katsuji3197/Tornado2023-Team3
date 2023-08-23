// TopPage.jsx
import '../assets/styles/css/TopPage.css'
import titleLogo from '../assets/images/icon_header_Alien.svg'

export const TopPage = () => {
  return (
    <div className="screen-start">
      <div className="title-start">
        <div className="maintitle">
          <img src={titleLogo} alt="title logo"></img>
        </div>
        <div className="subtitle">未知との出会い</div>
      </div>


      <div className="register">新規登録</div>
      <div className="login">ログイン</div>
      
    </div>
  );
}
