import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <>
      <HeaderTitle />
      <Menu />
    </>
  );
};

export default Header;

const HeaderTitle = () => {
  return (
    <h1>
      <Link href="/">:LOGO</Link>
    </h1>
  );
};
