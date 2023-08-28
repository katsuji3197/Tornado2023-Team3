import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { signIn } from "../../api/auth";
import { AlertMessage } from "../../components/AlertMessage";
import titleLogo from "../../assets/images/icon_header_Alien.svg";

import "../../assets/styles/css/LoginPage.css";

export const LoginPage = () => {
  const { setIsSignedIn, setCurrentUser, currentUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessageOpen, setAlertMessageOpen] = useState(false);

  // メールアドレスの入力処理
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  // パスワードの入力処理
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    // 画面遷移を防ぐ
    e.preventDefault();

    // ログイン処理
    try {
      const res = await signIn({ email, password });

      console.log(res);
      console.log("currentUser", currentUser);

      if (res.status === 200) {
        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        navigate("/mypage");
      } else {
        console.log("Login failed");
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.error(err);
      setAlertMessageOpen(true);
    }
  };

  return (
    <div className="screen-login">
      <div className="screen-login-wrapper">
        <div className="title-login">
          <img src={titleLogo} alt="title logo" />
        </div>

        <div className="name-wrapper">
          <div className="name-title">メールアドレス</div>
          <input
            className="name-input"
            type="email"
            placeholder="タップしてメールアドレスを入力"
            value={email}
            onChange={handleEmailInput}
          />
        </div>

        <div className="pass-wrapper">
          <div className="pass-title">パスワード</div>
          <input
            className="pass-input"
            type="password"
            placeholder="タップしてパスワードを入力"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>

        <a href="#">
          <div className="pass-forget">パスワードを忘れた場合</div>
        </a>

        <button className="btn-login" onClick={handleSubmit}>
          ログイン
        </button>
      </div>
      <AlertMessage
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        message="ログインに失敗しました"
        severity="error"
      />
    </div>
  );
};
