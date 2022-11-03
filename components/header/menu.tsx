import Link from "next/link";
import { NeoContent } from "../common/styled-component";

const Menu = () => {
  return (
    <nav className="flex justify-between w-1/3 ">
      <MenuItem name="about" />
      <MenuItem name="works" />
      <MenuItem name="posts" />
    </nav>
  );
};

export default Menu;

type MenuItemProps = {
  name: string;
};

const MenuItem = ({ name }: MenuItemProps) => {
  return (
    <div className="pl-4 text-md font-bold text-textSub hover:gray">
      <Link href={`/${name}`}>{name}</Link>
    </div>
  );
};
