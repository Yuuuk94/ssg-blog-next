import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="flex justify-between">
      <HeaderTitle />
      <Menu />
    </div>
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
