import PropTypes from "prop-types";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-14 pb-14 overflow-y-auto">{children}</main>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
