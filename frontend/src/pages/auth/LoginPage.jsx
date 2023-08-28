// LoginPage.jsx
import { useState } from 'react';
import '../../assets/styles/css/LoginPage.css';
import titleLogo from '../../assets/images/icon_header_Alien.svg'

export const LoginPage = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handlePassInput = (event) => {
    setPass(event.target.value);
  };

  return (
    <div className="screen-login">
      <div className="screen-login-wrapper">

        <div className="title-login">
          <img src={titleLogo} alt="title logo"></img>
        </div>

        <div className="name-wrapper">
          <div className="name-title">メールアドレス</div>
          <input className ="name-input" type="text" placeholder="タップしてメールアドレスを入力" value={name} onChange={handleNameInput} />
        </div>

        <div className="pass-wrapper">
          <div className="pass-title">パスワード</div>
          <input className ="pass-input" type="text" placeholder="タップしてパスワードを入力" value={pass} onChange={handlePassInput} />
        </div>
        
        <a href="#">
          <div className="pass-forget">パスワードを忘れた場合</div>
        </a>

        <a href="#">
          <div className="btn-login">ログイン</div>
        </a>
        
      </div>
    </div>
  );
}
