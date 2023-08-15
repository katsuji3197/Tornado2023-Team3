import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BackLink = ({ to, label }) => {
  return (
    <Link to={to} className="flex items-center hover:text-gray-400 mb-4">
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
      <span className="ml-2">{label}</span>
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BackLink;
