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
    <div className="match-input-container p-4 md:p-8 bg-blue-950 text-white min-h-screen space-y-6 md:space-y-32">
      {/* ページのタイトル */}
      <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">交信の条件</h1>
      <p className="text-sm md:text-lg">
        時間・場所の設定が多いほど遭遇しやすくなります。
      </p>

      {/* マッチング条件の入力フォーム */}
      {/* 場所選択 */}
      <div className="place-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl">場所選択</h2>
        <select
          onChange={handlePlaceChange}
          className="mt-2 md:mt-4 w-full p-2 md:p-4 rounded-md bg-blue-900 text-white"
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

      {/* 日時選択 */}
      <div className="birthdate-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl">生年月日</h2>
        <input
          type="datetime-local"
          value={selectedDate}
          onChange={handleDateChange}
          className="mt-2 md:mt-4 w-full p-2 md:p-4 rounded-md bg-blue-900 text-white"
        />
        <button
          onClick={addDate}
          className="mt-2 md:mt-4 p-2 md:p-4 rounded-md bg-blue-700 text-white hover:bg-blue-600"
        >
          日時を追加
        </button>
        <ul className="mt-2 md:mt-4">
          {selectedDates.map((date, index) => (
            <li key={index} className="flex items-center space-x-4 mt-2">
              <span className="rounded-md bg-blue-800 p-2">{date}</span>
              <button
                onClick={() => removeDate(date)}
                className="p-1 md:p-2 rounded-full bg-red-600 text-white hover:bg-red-500"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* バックグランドの編集 */}
      <Link to={"/edit-profile"} state={{ from: "/match-input" }}>
        <div className="background-section mb-4 md:mb-8">
          <h2 className="text-lg md:text-2xl">バックグランドの編集</h2>
        </div>
      </Link>
    </div>
  );
};
