import { Link } from "react-router-dom";

const user = {
  name: "John Doe",
  email: "alien@example.com",
  profile: "I'm an alien.",
  profilePicture: "https://avatars.githubusercontent.com/u/12345678?v=4",
};

const alienEncounters = 200;

const DashboardPage = () => {
  return (
    <div className="dashboard-container p-8 bg-blue-950 text-white min-h-screen space-y-32">
      {/* ユーザーの写真と名前 */}
      <div className="user-info flex items-center space-x-4 mb-8">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
          className="user-photo w-16 h-16 md:w-24 md:h-24 rounded-full border border-purple-500"
        />
        <h2 className="user-name text-xl md:text-2xl font-bold">{user.name}</h2>
      </div>

      {/* 遭遇したエイリアンの数 */}
      <div className="alien-encounters mb-8 bg-blue-900 p-4 rounded-xl shadow-md">
        <p className="text-lg md:text-xl">
          遭遇したエイリアンの数:{" "}
          <span className="font-bold">{alienEncounters}</span>
        </p>
      </div>

      {/* プロフィール編集とアカウント設定への遷移ボタン */}
      <div className="navigation-buttons space-y-4">
        <Link
          to={"/edit-profile"}
          state={{ from: "/mypage" }}
          className={
            "edit-profile-btn block text-center py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-green-600"
          }
        >
          プロフィール編集
        </Link>
        <Link
          to="/account-settings"
          className="account-settings-btn block text-center py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-green-500"
        >
          アカウント設定
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
