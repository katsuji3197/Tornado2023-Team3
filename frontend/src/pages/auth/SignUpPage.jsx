import { useState, useContext } from "react";
import Cookies from "js-cookie";
import "../../assets/styles/css/SignUpPage.css";
import titleLogo from "../../assets/images/icon_header_Alien.svg";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth";
import { AuthContext } from "../../App";
import { AlertMessage } from "../../components/AlertMessage";

export const SignUpPage = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [alertMessageOpen, setAlertMessageOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setAlertMessageOpen(true);
      return;
    }

    const params = {
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    try {
      const res = await signUp(params);

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        navigate("/mypage");
      } else {
        console.log("Sign up failed");
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.error(err);
      setAlertMessageOpen(true);
    }
  };

  return (
    <div className="screen-signup">
      <div className="screen-signup-wrapper">
        <div className="title-signup">
          <img src={titleLogo} alt="title logo" />
        </div>

        <div className="mail-wrapper">
          <div className="mail-title">メールアドレス</div>
          <input
            className="mail-input"
            type="text"
            placeholder="タップしてメールアドレスを入力"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="pass-wrapper">
          <div className="pass-title">パスワード</div>
          <input
            className="pass-input"
            type="password"
            placeholder="タップしてパスワードを入力"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="pass-wrapper">
          <div className="pass-title">パスワードの確認</div>
          <input
            className="pass-input"
            type="password"
            placeholder="タップしてパスワードを再入力"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </div>

        <a href="#">
          <div className="pass-forget">パスワードを忘れた場合</div>
        </a>

        <div className="btn-next" onClick={handleSubmit}>
          次へ
        </div>
      </div>
      <AlertMessage
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        message={"入力内容を確認してください"}
        severity="error"
      />
    </div>
  );
};
