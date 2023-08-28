// MatchedPage.jsx
import '../../assets/styles/css/MatchedPage.css';
import matchedCheck          from '../../assets/images/matched_check.svg';
import matchedAlienGradation from '../../assets/images/matched_alien_gradation.svg';
import matchingAlienPurple   from '../../assets/images/matching_alien_purple.svg';
import matchedCafe           from '../../assets/images/matched_cafe.png';
import matchingDate          from '../../assets/images/matching_date.svg';
import matchingPin           from '../../assets/images/matching_pin.svg';

export const MatchedPage = () => {
  return (
    <div className="matched-screen">

      <div className="communication-status">更新状況</div>

      <div className="main-wrap">

        <div className="matched-announce-wrap">
          <img src={matchedCheck} alt="matched_check"></img>
          <div className="matched-announce-text">エイリアンと遭遇しました</div>
        </div>

        <img src={matchedAlienGradation} alt="matched_alien_gradation"></img>
        <div className="upper-matched-complete-text">交信完了</div>
        <div className="lower-matched-complete-text">エイリアンと遭遇しました</div>

        <div className="alien-img-wrap">
          <img src={matchingAlienPurple}></img>
          <img src={matchingAlienPurple}></img>
          <img src={matchingAlienPurple}></img>
          <img src={matchingAlienPurple}></img>
          <img src={matchingAlienPurple}></img>
          <img src={matchingAlienPurple}></img>
        </div>

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
                <img src={matchingDate} alt="matching_date"></img>
                <div className="date-title">日時</div>
              </div>

              <div className="date-time">2023年mm月dd日 <br />12:00 ~</div>
            </div>

            <div className="btn-wrap">
              <div className="alien-note-wrap">
                <img src={matchedAlienGradation} alt="matched_alien_gradation"></img>
                <div className="alien-note-title">エイリアンノート</div>
              </div>

              <div className="google-map-wrap">
                <img src={matchingPin} alt="matching-pin"></img>
                <div className="google-map-title">GoogleMapで確認</div>
              </div>
            </div>
            

          </div>

        </div>

      </div>
    </div>
  );
}
