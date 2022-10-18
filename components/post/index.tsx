import Link from "next/link";

type Props = {
  slug: string;
};

const PostList = ({ slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      title/contnet
    </Link>
  );
};

export default PostList;
