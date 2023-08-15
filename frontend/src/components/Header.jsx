import alienLogo from "../assets/images/icon_header_Alien.svg";
import userLogo from "../assets/images/icon_header_UnknownUser.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 bg-indigo-950 w-full py-2">
      <div className="flex justify-between px-5">
        <div className="flex items-center p-2.5">
          <Link to="/alien-path" className="flex">
            {" "}
            <img src={alienLogo} alt="alien logo" className="w-auto" />
          </Link>
        </div>

        <div className="flex items-center p-2.5">
          <Link to="/user-path" className="flex">
            {" "}
            <img
              src={userLogo}
              alt="user image"
              className="bg-purple-500 rounded-full w-6.5 h-6.5"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
