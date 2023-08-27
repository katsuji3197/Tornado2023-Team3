import { useLocation, Link } from "react-router-dom";
import myPageIcon from "../assets/images/icon_header_UnknownUser.svg";
import accountSettingsIcon from "../assets/images/icon_header_UnknownUser.svg";
import editProfileIcon from "../assets/images/icon_header_UnknownUser.svg";
import wireIcon from "../assets/images/icon_footer_wire.svg";
import recruitIcon from "../assets/images/icon_footer_rocket.svg";
import chatIcon from "../assets/images/icon_footer_chat.svg";


export const Footer = () => {
  const location = useLocation();

  const isCurrentRoute = (route) => location.pathname === route;

  return (
    <footer className="fixed bottom-0 w-full bg-indigo-950 py-2 shadow-top">
      <div className="flex justify-between px-5">
        {/* 交信 */}
        <Link
          to="/match"
          className={`flex flex-col items-center ${
            isCurrentRoute("/match") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={wireIcon}
            alt="Matching"
            className={`w-${isCurrentRoute("/match") ? "8" : "6"} h-${
              isCurrentRoute("/match") ? "8" : "6"
            } mb-1`}
          />
          <span className="text-xs">交信</span>
        </Link>
        
        {/* 募集 ※TODO:どこにリンクするかわからない*/}
        <Link
          to="/mypage"
          className={`flex flex-col items-center ${
            isCurrentRoute("/mypage") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={recruitIcon}
            alt="Recruit"
            className={`w-${
              isCurrentRoute("/mypage") ? "8" : "6"
            } h-${
              isCurrentRoute("/mypage") ? "8" : "6"
            } mb-1`}
          />
          <span className="text-xs">募集</span>
        </Link>
        {/* チャット */}
        <Link
          to="/start-communication"
          className={`flex flex-col items-center ${
            isCurrentRoute("/start-communication") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={chatIcon}
            alt="Chat"
            className={`w-${
              isCurrentRoute("/start-communication") ? "8" : "6"
            } h-${
              isCurrentRoute("/start-communication") ? "8" : "6"
            } mb-1`}
          />
          <span className="text-xs">チャット</span>
        </Link>

        {/*My Page*/}
        <Link
          to="/edit-profile"
          className={`flex flex-col items-center ${
            isCurrentRoute("/mypage") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={myPageIcon}
            alt="Edit Profile"
            className={`w-${isCurrentRoute("/mypage") ? "8" : "6"} h-${
              isCurrentRoute("/mypage") ? "8" : "6"
            } mb-1`}
          />
          <span className="text-xs">My Page</span>
        </Link>
        
      </div>
    </footer>
  );
};