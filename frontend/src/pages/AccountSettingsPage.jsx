import { Link } from "react-router-dom";

const user = {
  name: "John Doe",
  email: "alien@example.com",
  profile: "I'm an alien.",
  profilePicture: "https://avatars.githubusercontent.com/u/12345678?v=4",
};

export const AccountSettingsPage = () => {
  return (
    <div className="account-settings-container p-4 md:p-8 bg-blue-950 text-white min-h-screen space-y-6 md:space-y-12">
      {/* マイページに戻るリンク */}
      <Link to="/mypage" className="flex items-center hover:text-gray-400 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <span className="ml-2">マイページに戻る</span>
      </Link>

      {/* ページのタイトル */}
      <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">
        アカウント情報
      </h1>

      {/* プロフィール写真 */}
      <div className="profile-photo-section mb-4 md:mb-8 flex justify-center">
        <span className="relative inline-block">
          <img
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            className="w-24 h-24 rounded-full border border-purple-500"
          />
          <svg
            className="text-white absolute bottom-0 right-0 -mb-1.5 -mr-1.5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </span>
      </div>

      {/* ID */}
      <Link
        to="/edit-id"
        className="block p-2 hover:bg-blue-900 rounded transition"
      >
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <div>
            <h2 className="text-lg md:text-2xl">ID:</h2>
            <p className="text-base md:text-xl">{user.name}</p>
          </div>
          <span className="text-xl md:text-3xl">&gt;</span>
        </div>
      </Link>

      {/* メールアドレスの表示 */}
      <Link
        to="/edit-email"
        className="block p-2 hover:bg-blue-900 rounded transition"
      >
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <div>
            <h2 className="text-lg md:text-2xl">メールアドレス:</h2>
            <p className="text-base md:text-xl">{user.email}</p>
          </div>
          <span className="text-xl md:text-3xl">&gt;</span>
        </div>
      </Link>

      {/* TODO：パスワード*/}
      <Link
        to="/edit-password"
        className="block p-2 hover:bg-blue-900 rounded transition"
      >
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <div>
            <h2 className="text-lg md:text-2xl">パスワード:</h2>
            <p className="text-base md:text-xl">********</p>
          </div>
          <span className="text-xl md:text-3xl">&gt;</span>
        </div>
      </Link>

      {/* TODO：アカウントの削除 */}
      <div className="delete-account-section">
        <h2 className="text-lg md:text-2xl">アカウントの削除:</h2>
        <p className="text-red-500">
          このアクションは元に戻せません。注意してください。
        </p>
        <button className="bg-red-500 py-1 md:py-2 px-2 md:px-4 rounded-full mt-2 md:mt-4">
          アカウントを削除する
        </button>
      </div>
    </div>
  );
};
