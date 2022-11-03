import Link from "next/link";
import { NeoContent } from "../common/styled-component";

const Menu = () => {
  return (
    <nav className="flex items-center">
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
    <div className="pl-8 text-lg font-bold text-textSub hover:text-textMain">
      <Link href={`/${name}`}>{name}</Link>
    </div>
  );
};
