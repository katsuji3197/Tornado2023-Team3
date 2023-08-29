import { useState } from "react";
import { Link } from "react-router-dom";

export const MatchInputPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);

  const [selectedPlace, setSelectedPlace] = useState("");

  const prefectures = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const addDate = () => {
    if (selectedDate && !selectedDates.includes(selectedDate)) {
      setSelectedDates((prev) => [...prev, selectedDate]);
      setSelectedDate("");
    }
  };

  const removeDate = (dateToRemove) => {
    setSelectedDates((prev) => prev.filter((date) => date !== dateToRemove));
  };

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  return (
    <div className="match-input-container p-4 md:p-8 bg-gray-50 text-black min-h-screen space-y-6 md:space-y-32">
      {/* ページのタイトル */}
      <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">交信の条件</h1>
      <p className="text-sm md:text-lg">
        時間・場所の設定が多いほど遭遇しやすくなります。
      </p>

      {/* マッチング条件の入力フォーム */}

      {/* 日時選択 */}
      <div className="">
        <div className="text-lg md:text-2xl font-bold">日時の設定</div>
        <div className="text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl">
          <input
            type="datetime-local"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-white w-full"
          />
        </div>
        <div className="pt-6"></div>
        <button
          onClick={addDate}
          className="text-white ml-2 w-full p-2 md:p-4 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl text-center shadow-xl"
        >
          日時を追加
        </button>
        <ul className="mt-2 md:mt-4">
          {selectedDates.map((date, index) => (
            <li key={index} className="flex items-center space-x-4 mt-2">
              <span className="rounded-md bg-white p-2 shadow-xl">{date}</span>
              <button
                onClick={() => removeDate(date)}
                className="p-1 md:p-2 text-red-600"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 場所選択 */}
      <div className="place-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl font-xl font-bold">場所選択</h2>
        <select
          onChange={handlePlaceChange}
          className="mt-2 md:mt-4 w-full p-2 md:p-4 rounded-md bg-white text-black shadow-xl"
        >
          <option value="">選択してください</option>
          {prefectures.map((pref) => (
            <option key={pref} value={pref}>
              {pref}
            </option>
          ))}
        </select>
        {selectedPlace && <p className="mt-2">選択した場所: {selectedPlace}</p>}
      </div>

      {/* バックグランドの編集 */}
      <div>

      <h2 className="text-lg md:text-2xl font-bold">最後に</h2>
        <Link to={"/edit-profile"} state={{ from: "/match-input" }}>
          <div className="background-section mb-4 md:mb-8">
            <h2 className="text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl text-center shadow-xl">バックグランドの編集</h2>
          </div>
        </Link>
        <Link to={"/match-waiting"} state={{ from: "/match-input" }}>
          <div className="background-section mb-4 md:mb-8">
            <h2 className="text-white ml-2 w-full p-2 md:p-4 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl text-center shadow-xl">更新を開始する👽</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};
