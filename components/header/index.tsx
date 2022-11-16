import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-auto px-8 py-8 min-[770px]:w-9/12">
      <HeaderTitle />
      <Menu />
    </div>
  );
};

export default Header;

const HeaderTitle = () => {
  return (
    <h1 className="text-lg font-semibold text-textSub hover:text-textMain">
      <Link href="/">:LOGO</Link>
    </h1>
  );
};
