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
      <Head>
        <Meta />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
