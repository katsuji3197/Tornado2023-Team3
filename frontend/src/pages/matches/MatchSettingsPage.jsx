// MatchSettingsPage.jsx
import "../../assets/styles/css/MatchSettingsPage.css";

import matchedAlienGradation from "../../assets/images/matched_alien_gradation.svg";
import matchingDate from "../../assets/images/matching_date.svg";
import matchingPin from "../../assets/images/matching_pin.svg";
import matchingDateGray from "../../assets/images/matching_date_gray.svg";
import arrowLeft from "../../assets/images/arrow_left.svg";
import arrowDown from "../../assets/images/arrow_down.svg";


export const MatchSettingsPage = () => {
  return(
    <div className="match-settings-screen">
      <header className="communication-setting-wrap">
        <img src={arrowLeft} alt="arrow_left"></img>
        <div className="communication-setting-text">交信の設定</div> 
      </header>

      <main className="match-settings-main">
        <div className="match-settings-main-wrap">

          <div className="pre-text">日時・場所の設定が多いほど遭遇しやすくなります。</div>

          <div className="date-settings-wrap">
            <img src={matchingDate} alt="matching_date"></img>
            <div className="date-settings-text">日時の設定</div>
          </div>


          <div className="date-set-wrap">
            <div className="date-set-text">年/月/日 --:--</div>
            <img src={matchingDateGray} alt="matching_date_gray"></img>
          </div>

          <div className="date-add-text">選択した日時を追加</div>

          <div className="added-time-wrap">
            <div className="divide-line"></div>

            <div className="added-text-wrap">
              <div className="added-date-text">2023/08/15/ 10:00~</div>
              <div className="delete-text">削除</div>
            </div>
            
            <div className="divide-line"></div>

            <div className="added-text-wrap">
              <div className="added-date-text">2023/08/15/ 10:00~</div>
              <div className="delete-text">削除</div>
            </div>

            <div className="divide-line"></div>
          </div>

          <div className="date-settings-wrap">
            <img src={matchingPin} alt="matching_pin"></img>
            <div className="date-settings-text">場所の設定</div>
          </div>

          <div className="place-set-wrap">
            <div className="place-set-text">選択</div>
            <img src={arrowDown} alt="arrow_down"></img>
          </div>


          <div className="added-place-wrap">

            <div className="divide-line"></div>

            <div className="added-text-wrap">
              <div className="added-place-text">東京都</div>
              <div className="delete-text">削除</div>
            </div>

            <div className="divide-line"></div>

            <div className="added-text-wrap">
              <div className="added-place-text">群馬県</div>
              <div className="delete-text">削除</div>
            </div>

            <div className="divide-line"></div>
          </div>

          <div className="date-settings-wrap">
            <img src={matchedAlienGradation} alt="matched_alien_gradation"></img>
            <div className="date-settings-text">最後に</div>
          </div>

          <div className="edit-background-text">バックグラウンドを編集する</div>

          <div className="start-communication">交信を開始する</div>
        </div>
      </main>
    </div>


  );
};
