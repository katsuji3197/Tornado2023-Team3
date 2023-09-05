import { Link } from "react-router-dom";
import "../../assets/styles/css/MessageIndividualPage.css";

//import unknownUser from "../../assets/images/icon_header_UnknownUser.svg";
import arrowLeft from "../../assets/images/arrow_left.svg";
//import sendMessageGray from "../../assets/images/send_message_gray.svg";

export const NotificationsPage = () => {
  return (
    <div className="message-screen">
      <header className="message-header-wrap">
        <img src={arrowLeft} alt="arrow_left"></img>
        <Link to="/recruit">
          <div className="message-header-text">お知らせ</div>
        </Link>
      </header>

      <main className="message-main">
        <div className="all-message-wrap">
          {/* 1コメ目 */}
          <div className="relative p-4 border-b border-gray-300"></div>
          <div className="relative p-4">
            {" "}
            {/* paddingを追加 */}
            <div className="each-right-lower-text mb-4">
              {" "}
              {/* margin-bottomを追加 */}
              hoge田hoge男さんが参加しました。
            </div>
            <div className="absolute bottom-0 right-0">
              {" "}
              {/* 絶対位置指定で右下に配置 */}
              <div className="left-time">7分前</div>
            </div>
          </div>

          {/* 2コメ目 */}
          <div className="relative p-4 border-b border-gray-300"></div>
          <div className="relative p-4">
            {" "}
            {/* paddingを追加 */}
            <div className="each-right-lower-text mb-4">
              {" "}
              {/* margin-bottomを追加 */}
              hoge田hoge男さんが参加しました。
            </div>
            <div className="absolute bottom-0 right-0">
              {" "}
              {/* 絶対位置指定で右下に配置 */}
              <div className="left-time">7分前</div>
            </div>
          </div>

          {/* 3コメ目 */}
          <div className="relative p-4 border-b border-gray-300"></div>
          <div className="relative p-4">
            {" "}
            {/* paddingを追加 */}
            <div className="each-right-lower-text mb-4">
              {" "}
              {/* margin-bottomを追加 */}
              hoge田hoge男さんの募集に参加しました。
            </div>
            <div className="absolute bottom-0 right-0">
              {" "}
              {/* 絶対位置指定で右下に配置 */}
              <div className="left-time">7分前</div>
            </div>
          </div>
          {/* 4コメ目 */}
          <div className="relative p-4 border-b border-gray-300"></div>
          <div className="relative p-4">
            {" "}
            {/* paddingを追加 */}
            <div className="each-right-lower-text mb-4">
              {" "}
              {/* margin-bottomを追加 */}
              hoge田hoge男さんが参加しました。
            </div>
            <div className="absolute bottom-0 right-0">
              {" "}
              {/* 絶対位置指定で右下に配置 */}
              <div className="left-time">7分前</div>
            </div>
          </div>
          {/* ５コメ目 */}
          <div className="relative p-4 border-b border-gray-300"></div>
          <div className="relative p-4">
            {" "}
            {/* paddingを追加 */}
            <div className="each-right-lower-text mb-4">
              {" "}
              {/* margin-bottomを追加 */}
              hoge田hoge男さんが参加しました。
            </div>
            <div className="absolute bottom-0 right-0">
              {" "}
              {/* 絶対位置指定で右下に配置 */}
              <div className="left-time">7分前</div>
            </div>
          </div>
          <div className="relative p-4 border-b border-gray-300"></div>
        </div>
      </main>
    </div>
  );
};
