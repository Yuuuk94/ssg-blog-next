import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <Link href="/about">about</Link>
      <Link href="/works">works</Link>
      <Link href="/posts">blog</Link>
    </nav>
  );
};

export default Menu;
