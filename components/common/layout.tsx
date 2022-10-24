import Head from "next/head";
import Meta from "./meta";
import Header from "../header";
import Footer from "../footer";
type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <>
      <Meta />
      <Header />
      <main className="mx-auto px-4 pt-4 pb-20 w-2/3">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
