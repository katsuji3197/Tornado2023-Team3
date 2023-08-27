import PropTypes from "prop-types";

export const PlainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-14 pb-14 overflow-y-auto">{children}</main>
    </div>
  );
};

PlainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
