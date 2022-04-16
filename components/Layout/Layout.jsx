import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import Navbar from "../Organisms/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
