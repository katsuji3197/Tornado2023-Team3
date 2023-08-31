import "../../assets/styles/css/MessageIndividualPage.css";

import unknownUser from "../../assets/images/icon_header_UnknownUser.svg";
import arrowLeft from "../../assets/images/arrow_left.svg";
import sendMessageGray from "../../assets/images/send_message_gray.svg";

export const MessageIndividualPage = () => {
  return(
    <div className="message-indivisual-screen">
      <header className="message-indivisual-header-wrap">
        <img src={arrowLeft} alt="arrow_left"></img>
        <div className="message-indivisual-header-text">hoge田 hoge男</div> 
      </header>

      
      <main className="message-indivisual-main">
          
        <div className="all-message-wrap">

          {/* 1コメ目 */}
          <div className="each-message-wrap">
            <div className="each-left-wrap">
              <img src={unknownUser} alt="icon_header_UnknownUser"></img>
            </div>

            <div className="each-right-wrap">
              <div className="each-right-upper-wrap">
                <div className="right-name">hoge田 hoge男</div>
                <div className="left-time">今日 17:00</div>
              </div>

              <div className="each-right-lower-text">
              この前はありがとうございました。<br />
              お話を聞けてとても楽しかったです。<br />
              今週、開いている日時があれば、<br />
              一緒に映画でも見に行きませんか？
              </div>
            </div>
          </div>

          {/* 2コメ目 */}
          <div className="each-message-wrap">
            <div className="each-left-wrap">
              <img src={unknownUser} alt="icon_header_UnknownUser"></img>
            </div>

            <div className="each-right-wrap">
              <div className="each-right-upper-wrap">
                <div className="right-name">私</div>
                <div className="left-time">今日 17:02</div>
              </div>

              <div className="each-right-lower-text">
              こちらこそありがとうございました。<br />
              あなたの趣味にとても引かれるものがありました。<br />
              明後日は一日中暇です。<br />
              hoge男さんの都合はどうでしょうか？
              </div>
            </div>
          </div>

          {/* 3コメ目 */}
          <div className="each-message-wrap">
            <div className="each-left-wrap">
              <img src={unknownUser} alt="icon_header_UnknownUser"></img>
            </div>

            <div className="each-right-wrap">
              <div className="each-right-upper-wrap">
                <div className="right-name">hoge田 hoge男</div>
                <div className="left-time">今日 17:05</div>
              </div>

              <div className="each-right-lower-text">
              ええ、私も空いております。<br />
              そうしましたら、13:40から始まる映画「Alien」を見に行きましょう。<br />
              10分程前に映画館で集合しましょう。<br />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="send-message-footer-wrap">
        <div className="send-message-wrap">
          <div className="send-message-input">メッセージを入力</div>
          <div className="send-message-btn">
            <img src={sendMessageGray} alt="send_message_gray"></img>
          </div>
        </div>
      </footer>
    </div>
  );
};
