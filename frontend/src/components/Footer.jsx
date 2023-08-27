import { useLocation, Link } from "react-router-dom";
import myPageIcon from "../assets/images/icon_header_UnknownUser.svg";
import accountSettingsIcon from "../assets/images/icon_header_UnknownUser.svg";
import editProfileIcon from "../assets/images/icon_header_UnknownUser.svg";

export const Footer = () => {
  const location = useLocation();

  const isCurrentRoute = (route) => location.pathname === route;

  return (
    <footer className="fixed bottom-0 w-full bg-indigo-950 py-2 shadow-top">
      <div className="flex justify-between px-5">
        <Link
          to="/mypage"
          className={`flex flex-col items-center ${
            isCurrentRoute("/mypage") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={myPageIcon}
            alt="My Page"
            className={`w-${isCurrentRoute("/mypage") ? "8" : "6"} h-${
              isCurrentRoute("/mypage") ? "8" : "6"
            } mb-1 bg-purple-500 rounded-full`}
          />
          <span className="text-xs">My Page</span>
        </Link>

        <Link
          to="/account-settings"
          className={`flex flex-col items-center ${
            isCurrentRoute("/account-settings") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={accountSettingsIcon}
            alt="Account Settings"
            className={`w-${
              isCurrentRoute("/account-settings") ? "8" : "6"
            } h-${
              isCurrentRoute("/account-settings") ? "8" : "6"
            } mb-1 bg-purple-500 rounded-full`}
          />
          <span className="text-xs">Account Settings</span>
        </Link>

        <Link
          to={"/edit-profile"}
          state={{ from: "/mypage" }}
          className={`flex flex-col items-center ${
            isCurrentRoute("/edit-profile") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={editProfileIcon}
            alt="Edit Profile"
            className={`w-${isCurrentRoute("/edit-profile") ? "8" : "6"} h-${
              isCurrentRoute("/edit-profile") ? "8" : "6"
            } mb-1 bg-purple-500 rounded-full`}
          />
          <span className="text-xs">Edit Profile</span>
        </Link>
      </div>
    </footer>
  );
};
