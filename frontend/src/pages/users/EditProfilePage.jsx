import { useState } from "react";
import { useLocation } from "react-router-dom";
import BackLink from "../../components/BackLink";
import RadioButtonGroup from "../../components/RadioButtonGroup";

const user = {
  name: "John Doe",
  sex: 1,
  email: "alien@example.com",
  profile: "I'm an alien.",
  profilePicture: "https://avatars.githubusercontent.com/u/12345678?v=4",
};

export const EditProfilePage = () => {
  // サンプル
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

  const [hobbiesList, setHobbiesList] = useState([
    "読書",
    "映画鑑賞",
    "旅行",
    "ゲーム",
    "料理",
    "スポーツ",
  ]);

  const genderOptions = [
    { label: "男性", value: 0 },
    { label: "女性", value: 1 },
    { label: "その他", value: 2 },
  ];

  const location = useLocation();
  const from = location.state?.from;

  const [name, setName] = useState(user.name);
  const [sex, setSex] = useState(user.sex);
  const [birthdate, setBirthdate] = useState("");
  const [birthplace, setBirthplace] = useState("");
  const [residence, setResidence] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [newHobby, setNewHobby] = useState("");
  const [experience, setExperience] = useState("");

  const handleAddHobby = () => {
    if (newHobby && !hobbiesList.includes(newHobby)) {
      setHobbiesList((prev) => [...prev, newHobby]);
      setHobbies((prev) => [...prev, newHobby]);
      setNewHobby("");
    }
  };

  const removeSelectedHobby = (hobbyToRemove) => {
    setHobbies((prev) => prev.filter((hobby) => hobby !== hobbyToRemove));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSexChange = (e) => {
    setSex(Number(e));
  };

  return (
    <div className="edit-profile-container text-gray-900 p-4 md:p-8 bg-gray-50 ext-neutral-800 min-h-screen space-y-6 md:space-y-32">
      {/* マイページに戻るリンク */}
      {from === "/mypage" ? (
        <BackLink to="/mypage" label="マイページに戻る" />
      ) : (
        <BackLink to={`${from}`} label={`戻る`} />
      )}

      {/* ページのタイトル */}
      <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-gray-900">
        プロフィール編集
      </h1>

      {/* 表示名 */}
      <div className="name-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl text-gray-900">表示名</h2>
        <textarea
          className="mt-2 md:mt-4 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl text-gray-900"
          value={name}
          onChange={handleNameChange}
          rows="1"
        ></textarea>
      </div>

      {/* 性別 */}

      <h2 className="text-lg md:text-2xl text-gray-900">性別</h2>
      <span>
        <RadioButtonGroup
          options={genderOptions}
          selectedValue={sex}
          onChange={handleSexChange}
          name="gender"
          className="profile-text-section mb-4 md:mb-8"
        />
      </span>

      {/* 生年月日 */}
      <div className="birthdate-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl text-gray-900">年月日日</h2>
        <input
          type="date"
          className="mt-2 md:mt-4 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl text-gray-900"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>

      {/* 出身地 */}
      <div className="birthplace-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl text-gray-900">出身地</h2>
        <select
          className="mt-2 md:mt-4 w-full p-2 md:p-4 rounded-md bg-white rounded-xl shadow-xl text-gray-900"
          value={birthplace}
          onChange={(e) => setBirthplace(e.target.value)}
        >
          {prefectures.map((pref) => (
            <option value={pref} key={pref}>
              {pref}
            </option>
          ))}
        </select>
      </div>

      {/* 居住地 */}
      <div className="residence-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl text-gray-900">居住地</h2>
        <select
          className="mt-2 md:mt-4 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl text-gray-900"
          value={residence}
          onChange={(e) => setResidence(e.target.value)}
        >
          {prefectures.map((pref) => (
            <option value={pref} key={pref}>
              {pref}
            </option>
          ))}
        </select>
      </div>

      {/* 趣味 */}
      <div className="hobbies-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl text-gray-900">趣味</h2>

        {/* 選択された趣味を表示 */}
        <div className="selected-hobbies mt-2 md:mt-4">
          {hobbies.map((hobby) => (
            <span
              key={hobby}
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl text-white p-2 md:p-4 mr-2 mb-2"
            >
              {hobby}
              <button
                onClick={() => removeSelectedHobby(hobby)}
                className="ml-2 text-md"
              >
                x
              </button>
            </span>
          ))}
        </div>

        {/* 趣味の選択 */}
        <select
          className="mt-2 md:mt-4 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl text-gray-900"
          value=""
          onChange={(e) => {
            const value = e.target.value;
            if (!hobbies.includes(value)) {
              setHobbies((prev) => [...prev, value]);
            }
          }}
        >
          <option value="" disabled>
            趣味を選択...
          </option>
          {hobbiesList.map((hobby) => (
            <option
              value={hobby}
              key={hobby}
              disabled={hobbies.includes(hobby)}
            >
              {hobby}
            </option>
          ))}
        </select>

        {/* 趣味の追加 */}
        <div className="add-hobby mt-2 md:mt-4 flex">
          <input
            type="text"
            placeholder="新しい趣味を追加"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
            className="p-2 md:p-4 bg-white rounded-xl shadow-xl flex-grow text-gray-900"
          />
          <button
            onClick={handleAddHobby}
            className="ml-2 p-2 md:p-4 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl text-white"
          >
            追加
          </button>
        </div>
      </div>

      {/* その他、経験してきたことなど自由に書いてください */}
      <div className="experience-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl text-gray-900">
          その他、経験してきたことなど自由に書いてください
        </h2>
        <textarea
          className="mt-2 md:mt-4 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          rows="5"
        ></textarea>
      </div>

      {/* 変更を保存するボタン（実際には実装が必要） */}
      <div>
        <button className="text-white ml-2 w-full p-2 md:p-4 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl">
          変更を保存する
        </button>
      </div>
    </div>
  );
};
