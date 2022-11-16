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
      <main className="mx-auto px-4 min-[770px]:pt-4 pb-2 min-[770px]:pb-8 min-[770px]:w-10/12">
        {children}
      </main>
      <LinkedIcon />
      <Footer />
      <TopBtn />
    </>
  );
};

export default Layout;
