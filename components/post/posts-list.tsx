import Link from "next/link";
import Post from "../../interfaces/post";

type PostsListProps = {
  posts: Post[];
};

const PostsList = ({ posts }: PostsListProps) => {
  const allPosts = posts;
  return (
    <>
      {allPosts.length > 0 &&
        allPosts.map((post, key) => (
          <Post
            key={key}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
          />
        ))}
    </>
  );
};

export default PostsList;

type PostProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const Post = ({ title, coverImage, date, excerpt, slug }: PostProps) => {
  return (
    <>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <p>{title}</p>
      </Link>
      <p>{date}</p>
      <p>{excerpt}</p>
    </>
  );
};
