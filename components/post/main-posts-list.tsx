import Post from "../../interfaces/post";
import { NeoContent } from "../common/styled-component";
import DateFormatter from "../common/date-formatter";
import Link from "next/link";

type MainPostsListProps = {
  posts: Post[];
};

const MainPostsList = ({ posts }: MainPostsListProps) => {
  return (
    <NeoContent>
      <p className="pb-6 text-lg font-semibold leading-snug text-textMain">
        New Posts
      </p>
      {posts.length > 0 &&
        posts.map((post, key) => <MainPost key={key} post={post} />)}
    </NeoContent>
  );
};

export default MainPostsList;

type MainPostsProps = {
  post: Post;
};
export const MainPost = ({ post }: MainPostsProps) => (
  <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
    <div className="cursor-pointer hover:underline decoration-2 decoration-textSub">
      <h3 className="text-lg font-semibold leading-snug text-textMain">
        {post.title}
      </h3>
      <DateFormatter dateString={post.date} />
      <p className="mt-2 text-md leading-snug text-textSub">{post.excerpt}</p>
      <p className="border-b border-textSub mt-4 mb-6"></p>
    </div>
  </Link>
);
