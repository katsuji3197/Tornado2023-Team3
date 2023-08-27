// signupPage.jsx
import { useState } from 'react';
import '../../assets/styles/css/SignUpPage.css';
import titleLogo from '../../assets/images/icon_header_Alien.svg';

export const SignUpPage = () => {
  const [mail, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handlePassInput = (event) => {
    setPass(event.target.value);
  };

  return (
    <div className="screen-signup">
      <div className="screen-signup-wrapper">

        <div className="title-signup">
          <img src={titleLogo} alt="title logo"></img>
        </div>

        <div className="mail-wrapper">
          <div className="mail-title">メールアドレス</div>
          <input className ="mail-input" type="text" placeholder="タップしてメールアドレスを入力" value={mail} onChange={handleNameInput} />
        </div>

        <div className="pass-wrapper">
          <div className="pass-title">パスワード</div>
          <input className ="pass-input" type="text" placeholder="タップしてパスワードを入力" value={pass} onChange={handlePassInput} />
        </div>
        
        <a href="#">
          <div className="pass-forget">パスワードを忘れた場合</div>
        </a>


        <div className="btn-next">次へ</div>
        
        
      </div>
    </div>
  );
}
