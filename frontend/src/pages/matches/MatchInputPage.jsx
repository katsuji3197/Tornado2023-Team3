import { useState } from "react";
import { Link } from "react-router-dom";
import { findMatch } from "../../api/matches";
import { useNavigate } from "react-router-dom";

export const MatchInputPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
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

  // 日時のフォーマット関数
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("ja-JP", options);
  };

  // 日時の変更時に発火する関数
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // 場所の変更時に発火する関数
  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  // 2. マッチを作成するための関数
  const navigate = useNavigate();

  const createMatch = async () => {
    if (!selectedDate || !selectedPlace) {
      alert("日時と場所を選択してください。");
      return;
    }

    try {
      const params = {
        match_date: selectedDate,
        meet_location: selectedPlace,
      };

      const response = await findMatch(params);
      console.log(response);

      if (response && response.status !== 200) {
        console.log(response);
        alert("マッチの作成に失敗しました。");
        return;
      }

      // マッチ作成成功後の遷移
      // history.push("/match", {
      //   from: "/match-input",
      //   createdMatch: response.data.match,
      // });
      navigate("/match", {
        state: { from: "/match-input", createdMatch: response.data.match },
      });
    } catch (error) {
      console.error("マッチの作成中にエラーが発生しました:", error);
    }
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
      <div className="date-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl font-bold">日時の設定</h2>
        <div className="text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl">
          <input
            type="datetime-local"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-white w-full"
          />
        </div>
        {selectedDate && (
          <p className="mt-2">選択した日時: {formatDate(selectedDate)}</p>
        )}
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
            <h2 className="text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl text-center shadow-xl">
              バックグランドの編集
            </h2>
          </div>
        </Link>
        <div
          className={`background-section mb-4 md:mb-8 ${
            selectedDate && selectedPlace
              ? "bg-gradient-to-r from-purple-600 to-blue-400 cursor-pointer"
              : "bg-gray-300"
          }`}
          onClick={createMatch}
        >
          <h2 className="text-white ml-2 w-full p-2 md:p-4 rounded-xl text-center shadow-xl">
            交信を開始する👽
          </h2>
        </div>
      </div>
    </div>
  );
};
