import Link from "next/link";

const Menu = () => {
  return (
    <nav className="flex justify-between w-1/4">
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
    <div className="pl-1 font-bold">
      <Link href={`/${name}`}>{name}</Link>
    </div>
  );
};
