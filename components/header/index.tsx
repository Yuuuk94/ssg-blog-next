import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="flex justify-between container md m-auto px-4 py-8">
      <HeaderTitle />
      <Menu />
    </div>
  );
};

export default Header;

const HeaderTitle = () => {
  return (
    <h1 className="text-md font-bold text-[#1c1c46]">
      <Link href="/">:LOGO</Link>
    </h1>
  );
};
