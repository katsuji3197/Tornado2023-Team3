import { Link } from "react-router-dom";
import recruitIconActive from "../../assets/images/icon_footer_rocket_colored.svg";
import calenderIconActive from "../../assets/images/matching_date.svg";
import pinIconActive from "../../assets/images/matching_pin.svg";
import arrowLeft from "../../assets/images/arrow_left.svg";

export const CreateRecruitPage = () => {
  return (
    <div>
      <header className="message-header-wrap">
        <img src={arrowLeft} alt="arrow_left"></img>
        <Link to="/recruit">
          <div className="message-header-text">募集する</div>
        </Link>
      </header>
      <div className="flex flex-col items-center justify-center bg-white mx-5">
        <div className="w-full md:w-3/4">
          {/* 募集内容 */}
          <div className="relative p-4">
            <div className="name-section mb-4 md:mb-8">
              <div className="flex items-center">
                <img
                  src={recruitIconActive}
                  alt="recruitIconActive"
                  className="w-8 h-8"
                />
                <h2 className="text-md md:text-2xl ml-2">募集内容</h2>
              </div>
              <textarea
                className="mt-2 md:mt-4 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl text-gray-900"
                // value={name}
                //onChange={handleNameChange}
                rows="1"
                placeholder="タップして入力"
              ></textarea>
            </div>
          </div>
          {/* 日時設定 */}
          <div className="relative p-4">
            <div className="date-section mb-4 md:mb-8">
              <div className="flex items-center">
                <img
                  src={calenderIconActive}
                  alt="calenderIconActive"
                  className="w-8 h-8"
                />
                <h2 className="text-md md:text-2xl ml-2">日時の設定</h2>
              </div>
              <input
                type="date"
                placeholder="年/月/日 --;--" // ここにプレースホルダーのテキストを設定
                className="mt-2 md:mt-4 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl text-gray-900"
              />
            </div>
          </div>

          {/* 場所の入力 */}
          <div className="relative p-4">
            <div className="name-section mb-4 md:mb-8">
              <div className="flex items-center">
                <img
                  src={pinIconActive}
                  alt="pinIconActive"
                  className="w-8 h-8"
                />
                <h2 className="text-md md:text-2xl ml-2">場所を選択</h2>
              </div>
              <textarea
                className="mt-2 md:mt-4 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl text-gray-900"
                //value={name}
                //onChange={handleNameChange}
                placeholder="タップして入力"
                rows="1"
              ></textarea>
            </div>
          </div>
          {/* 募集作成ボタン */}
          <div className="relative p-4">
            <button className="text-white ml-2 w-full p-2 md:p-4 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl">
              募集する！
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
