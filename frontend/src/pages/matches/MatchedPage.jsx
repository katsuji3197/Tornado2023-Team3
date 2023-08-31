import "../../assets/styles/css/MatchedPage.css";

import matchedCheck from "../../assets/images/matched_check.svg";
import matchedAlienGradation from "../../assets/images/matched_alien_gradation.svg";
import matchingAlienPurple from "../../assets/images/matching_alien_purple.svg";
import matchedCafe from "../../assets/images/matched_cafe.png";
import matchingDate from "../../assets/images/matching_date.svg";
import matchingPin from "../../assets/images/matching_pin.svg";
import { Link } from "react-router-dom";

export const MatchedPage = () => {
  return (
    <div className="matched-screen">
      <header className="communication-status">更新状況</header>

      <main className="main-wrap">
        <section className="matched-announce-wrap">
          <img src={matchedCheck} alt="matched_check" />
          <p className="matched-announce-text">エイリアンと遭遇しました</p>
        </section>

        <img src={matchedAlienGradation} alt="matched_alien_gradation" />
        <h1 className="upper-matched-complete-text">交信完了</h1>
        <h2 className="lower-matched-complete-text">
          エイリアンと遭遇しました
        </h2>

        <section className="alien-img-wrap">
          <img src={matchingAlienPurple} />
          <img src={matchingAlienPurple} />
          <img src={matchingAlienPurple} />
          <img src={matchingAlienPurple} />
          <img src={matchingAlienPurple} />
          <img src={matchingAlienPurple} />
        </section>

        <InfoCard />
      </main>
    </div>
  );
};

const InfoCard = () => {
  return (
    <div className="info-card-wrap">
      <div className="upper-wrap">
        <div className="upper-left">
          <img src={matchedCafe} alt="matched_cafe" />
        </div>

        <div className="upper-right">
          <div className="shop-label">カフェ</div>
          <div className="shop-address">カフェロゴス野々市</div>
          <div className="shop-from-station">野々市工大前駅徒歩7分</div>
        </div>
      </div>

      <div className="lower-wrap">
        <div className="date-wrap">
          <div className="date-title-wrap">
            <img src={matchingDate} alt="matching_date" />
            <div className="date-title">日時</div>
          </div>

          <div className="date-time">
            2023年mm月dd日 <br />
            12:00 ~
          </div>
        </div>

        <div className="btn-wrap">
          <Link to={"/note"} state={{ from: "/matched" }}>
            <div className="alien-note-wrap">
              <img src={matchedAlienGradation} alt="matched_alien_gradation" />
              <div className="alien-note-title">エイリアンノート</div>
            </div>
          </Link>

          <div className="google-map-wrap">
            <img src={matchingPin} alt="matching_pin" />
            <div className="google-map-title">GoogleMapで確認</div>
          </div>
        </div>
      </div>
    </div>
  );
};
