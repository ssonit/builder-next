import { NextPage } from "next";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
