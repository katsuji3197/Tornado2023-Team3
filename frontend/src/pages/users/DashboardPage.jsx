import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../App";
import { signOut, getCurrentUser } from "../../api/auth";
import { AlertMessage } from "../../components/AlertMessage";

// const user = {
//   name: "John Doe",
//   email: "alien@example.com",
//   profile: "I'm an alien.",
//   profilePicture: "https://avatars.githubusercontent.com/u/12345678?v=4",
// };

const aliencount = 256;
const alienEncounters = 200;
// const alienreview = 5;

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { setIsSignedIn, setCurrentUser, currentUser, isSignedIn } =
    useContext(AuthContext);
  const [alertMessageOpen, setAlertMessageOpen] = useState(false);

  const res = getCurrentUser();
  console.log(res);

  if (!isSignedIn) {
    navigate("/");
    return null;
  }
  const user = currentUser;
  console.log(user);

  const handleSignOut = async () => {
    try {
      const response = await signOut();

      if (response.status === 200) {
        // Clear user session/context
        setIsSignedIn(false);
        setCurrentUser(null);

        navigate("/");
      } else {
        console.error(
          "Logout unsuccessful. Check server response for more info."
        );
        setAlertMessageOpen(true);
      }
    } catch (error) {
      console.error("Failed to log out.", error);
      setAlertMessageOpen(true);
    }
  };

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
            <div className="text-lg md:text-xl text-gray-900">
              遭遇した回数:{" "}
              <p className="font-bold text-gray-900">{aliencount}</p>
            </div>
          </div>
          <div className="alien-encounters mb-4 bg-white p-6 rounded-xl shadow-xl">
            <div className="text-lg md:text-xl text-gray-900">
              遭遇したエイリアン:{" "}
              <p className="font-bold text-gray-900">{alienEncounters}</p>
            </div>
          </div>
        </div>
      </div>

      {/* プロフィール編集とアカウント設定への遷移ボタン */}
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
        <button
          className="logout-btn block text-center font-bold text-gray-900 alien-encounters mb-4 bg-white p-6 rounded-xl shadow-xl hover:bg-gray-300 w-full"
          onClick={handleSignOut}
        >
          ログアウト
        </button>
      </div>
      <AlertMessage
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        message="ログアウトに失敗しました"
        severity="error"
      />
    </div>
  );
};
