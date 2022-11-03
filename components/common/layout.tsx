import Head from "next/head";
import Meta from "./meta";
import Header from "../header";
import Footer from "../footer";
import { LinkedIcon, TopBtn } from "../icon-bar/linked-icon";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <>
      <Meta />
      <Header />
      <LinkedIcon />
      <main className="mx-auto px-4 pt-4 pb-8 w-10/12">{children}</main>
      <Footer />
      <TopBtn />
    </>
  );
};

export default Layout;
