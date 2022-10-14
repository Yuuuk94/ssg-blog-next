import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <Link href="/about">about</Link>
      <Link href="/posts">posts</Link>
      {/* <Link href="/works">works</Link>
      <Link href="/contact">contact</Link> */}
    </nav>
  );
};

export default Menu;
