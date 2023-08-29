import { Link } from "react-router-dom";

const user = {
  name: "John Doe",
  email: "alien@example.com",
  profile: "I'm an alien.",
  profilePicture: "https://avatars.githubusercontent.com/u/12345678?v=4",
};

const aliencount = 256;
const alienEncounters = 200;
// const alienreview = 5;

export const DashboardPage = () => {
  return (
    <div className="dashboard-container p-8 bg-gray-50 text-gray-900 min-h-screen space-y-8">
      {/* ユーザーの写真と名前 */}
      <div className="user-info flex items-center space-x-4 mb-0">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
          className="user-photo w-16 h-16 md:w-24 md:h-24 rounded-full border border-purple-500"
        />

        <h2 className="user-name text-xl md:text-2xl font-bold text-gray-900">
          {user.name}
        </h2>
      </div>

      {/* 遭遇したエイリアンの数 */}
      <div>
        {/* ページのタイトル */}
        <h1 className="text-xl md:text-3xl font-bold mb-4 text-neutral-800">
          実績
          <div className="ml-2 w-full border border-gray-200 " />
        </h1>
        <div className="flex justify-between space-x-4">
          <div className="alien-encounters mb-4 bg-white p-6 rounded-xl shadow-xl">
            <p className="text-lg md:text-xl text-gray-900">
              遭遇した回数:{" "}
              <p className="font-bold text-gray-900">{aliencount}</p>
            </p>
          </div>
          <div className="alien-encounters mb-4 bg-white p-6 rounded-xl shadow-xl">
            <p className="text-lg md:text-xl text-gray-900">
              遭遇したエイリアン:{" "}
              <p className="font-bold text-gray-900">{alienEncounters}</p>
            </p>
          </div>
        </div>
      </div>

      {/* プロフィール編集とアカウント設定への遷移ボタン */}
      <div>
        {/* ページのタイトル */}
        <h1 className="text-xl md:text-3xl font-bold mb-4 text-neutral-800">
          あなたについて
          <div className="ml-2 w-full border border-gray-200 " />
        </h1>
        <div className="navigation-buttons space-y-4">
          <Link
            to={"/edit-profile"}
            state={{ from: "/mypage" }}
            className={
              "edit-profile-btn block text-center font-bold text-gray-900 alien-encounters mb-4 bg-white p-6 rounded-xl shadow-xl hover:bg-gray-300"
            }
          >
            プロフィール編集
          </Link>
          <Link
            to="/account-settings"
            className="account-settings-btn block text-center font-bold text-gray-900 alien-encounters mb-4 bg-white p-6 rounded-xl shadow-xl hover:bg-gray-300"
          >
            アカウント設定
          </Link>
        </div>
      </div>
    </div>
  );
};
