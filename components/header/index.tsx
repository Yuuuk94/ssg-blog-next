import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="flex justify-between mx-auto px-8 py-8 w-2/3">
      <HeaderTitle />
      <Menu />
    </div>
  );
};

export default Header;

const HeaderTitle = () => {
  return (
    <h1 className="text-md font-semibold text-textSub">
      <Link href="/">:LOGO</Link>
    </h1>
  );
};
