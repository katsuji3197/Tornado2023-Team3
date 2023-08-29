import { useLocation, Link } from "react-router-dom";
import mypageIcon from "../assets/images/icon_footer_user.svg";
import wireIcon from "../assets/images/icon_footer_wire.svg";
import recruitIcon from "../assets/images/icon_footer_rocket.svg";
import chatIcon from "../assets/images/icon_footer_chat.svg";
{/* wireIconActive, recruitIconActive chatIconActive mypageIconActive */}
import wireIconActive from "../assets/images/icon_footer_wire_colored.svg";
import recruitIconActive from "../assets/images/icon_footer_rocket_colored.svg";
import chatIconActive from "../assets/images/icon_footer_chat_colored.svg";
import mypageIconActive from "../assets/images/icon_footer_user_colored.svg";



export const Footer = () => {
  const location = useLocation();

  const isCurrentRoute = (route) => location.pathname === route;

  return (
    <footer className="fixed bottom-0 w-full bg-white py-2 shadow-top">
      <div className="flex justify-between px-5">
        {/* 交信 */}
        <Link
          to="/match"
          className={`flex flex-col items-center ${
            isCurrentRoute("/match") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={isCurrentRoute("/match") ? wireIconActive : wireIcon}
            alt="Matching"
            className={`w-${isCurrentRoute("/match") ? "8" : "6"} h-${
              isCurrentRoute("/match") ? "8" : "6"
            } mb-1`}
          />
          <span className="text-xs">交信</span>
        </Link>
        
        {/* 募集 ※TODO:どこにリンクするかわからない*/}
        <Link
          to="/"
          className={`flex flex-col items-center ${
            isCurrentRoute("/") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={isCurrentRoute("/") ? recruitIconActive : recruitIcon}            
            alt="Recruit"
            className={`w-${
              isCurrentRoute("/") ? "8" : "6"
            } h-${
              isCurrentRoute("/") ? "8" : "6"
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
            src={isCurrentRoute("/start-communication") ? chatIconActive : chatIcon}
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
          to="/mypage"
          className={`flex flex-col items-center ${
            isCurrentRoute("/mypage") ? "text-white" : "text-gray-400"
          }`}
        >
          <img
            src={isCurrentRoute("/mypage") ? mypageIconActive : mypageIcon}
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