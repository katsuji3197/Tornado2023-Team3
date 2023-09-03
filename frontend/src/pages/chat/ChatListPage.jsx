{
  /* 募集作成 */
}
import userIcon from "../../assets/images/icon_user_with_circle.svg";
import alienIconActive from "../../assets/images/matched_alien_gradation.svg";
import chatIconActive from "../../assets/images/icon_footer_chat_colored.svg";
import recruitIconActive from "../../assets/images/icon_footer_rocket_colored.svg";
export const ChatListPage = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-300">チャット</div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-3/4">
          {/* 遭遇前チャット */}
          <div className="name-section mb-4 md:mb-8">
            <div className="flex items-center">
              <img
                src={alienIconActive}
                alt="alienIconActive"
                className="w-8 h-8"
              />
              <h2 className="text-md md:text-2xl ml-2">遭遇前チャット</h2>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
              <div className="w-5/6">
                <ChatBeforeMatchingCard />
              </div>
            </div>
          </div>
          {/* 参加連絡 */}
          <div className="name-section mb-4 md:mb-8">
            <div className="flex items-center">
              <img
                src={recruitIconActive}
                alt="recruitIconActive"
                className="w-8 h-8"
              />
              <h2 className="text-md md:text-2xl ml-2">参加連絡</h2>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
              <div className="w-5/6">
                <JoinMessageCard />
              </div>
            </div>
          </div>

          {/* ダイレクトメッセージ */}
          <div className="name-section mb-4 md:mb-8">
            <div className="flex items-center">
              <img
                src={chatIconActive}
                alt="chatIconActive"
                className="w-8 h-8"
              />
              <h2 className="text-md md:text-2xl ml-2">ダイレクトメッセージ</h2>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
              <div className="w-5/6">
                <DMCard />
                <DMCard />
                <DMCard />
                <DMCard />
                <DMCard />
                <DMCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const DMCard = () => {
  return (
    <div className="my-4 flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full bg-white rounded-xl p-6 shadow-lg">
        {/* ユーザー情報 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={userIcon} alt="userIcon" />
            <p className="text-md md:text-2xl ml-2">hoge田hoge男</p>
          </div>
          <p className="text-gray-500">＞</p>
        </div>
      </div>
    </div>
  );
};
const JoinMessageCard = () => {
  return (
    <div className="my-4 flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full bg-white rounded-xl p-6 shadow-lg">
        {/* ユーザー情報 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={userIcon} alt="userIcon" />
            <p className="text-md md:text-2xl ml-2">昼ご飯食べに行こー</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatBeforeMatchingCard = () => {
  return (
    <div className="my-4 flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full bg-white rounded-xl p-6 shadow-lg">
        {/* ユーザー情報 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={userIcon} alt="userIcon" />
            <p className="text-md md:text-2xl ml-2">参加する</p>
          </div>
        </div>
      </div>
    </div>
  );
};
