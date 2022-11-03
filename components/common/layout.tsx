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
      <main className="mx-auto px-4 pt-4 pb-12 w-10/12">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
