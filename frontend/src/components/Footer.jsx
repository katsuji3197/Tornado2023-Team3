import { useLocation, Link } from "react-router-dom";
import mypageIcon from "../assets/images/icon_footer_user.svg";
import wireIcon from "../assets/images/icon_footer_wire.svg";
import recruitIcon from "../assets/images/icon_footer_rocket.svg";
import chatIcon from "../assets/images/icon_footer_chat.svg";
import wireIconActive from "../assets/images/icon_footer_wire_colored.svg";
import recruitIconActive from "../assets/images/icon_footer_rocket_colored.svg";
import chatIconActive from "../assets/images/icon_footer_chat_colored.svg";
import mypageIconActive from "../assets/images/icon_footer_user_colored.svg";

import "../assets/styles/css/Footer.css";

export const Footer = () => {
  const location = useLocation();

  const MENU_ITEMS = [
    {
      to: "/start-communication",
      defaultIcon: wireIcon,
      activeIcon: wireIconActive,
      alt: "Matching",
      label: "交信",
    },
    {
      // TODO: 仮のURL
      to: "/account-settings",
      defaultIcon: recruitIcon,
      activeIcon: recruitIconActive,
      alt: "Recruit",
      label: "募集",
    },
    {
      // TODO: 仮のURL
      to: "/edit-profile",
      defaultIcon: chatIcon,
      activeIcon: chatIconActive,
      alt: "Chat",
      label: "チャット",
    },
    {
      to: "/mypage",
      defaultIcon: mypageIcon,
      activeIcon: mypageIconActive,
      alt: "Edit Profile",
      label: "マイページ",
    },
  ];

  const isCurrentRoute = (route) => location.pathname === route;

  return (
    <footer className="fixed bottom-0 w-full bg-white py-2 shadow-top">
      <div className="flex justify-between px-5">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center ${
              isCurrentRoute(item.to) ? "text-white" : "text-gray-400"
            }`}
          >
            <img
              src={isCurrentRoute(item.to) ? item.activeIcon : item.defaultIcon}
              alt={item.alt}
              className="w-8 h-8"
            />
            <span
              className={
                isCurrentRoute(item.to)
                  ? "text-xs font-bold footer-label-active"
                  : "text-xs text-gray-500"
              }
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </footer>
  );
};
