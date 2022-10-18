import Post from "../../interfaces/post";

type MainPostsListProps = {
  posts: Post[];
};

const MainPostsList = ({ posts }: MainPostsListProps) => {
  console.log(posts);
  return (
    <>{posts.length > 0 && posts.map((post) => <MainPost post={post} />)}</>
  );
};

export default MainPostsList;

type MainPostsProps = {
  post: Post;
};
export const MainPost = ({ post }: MainPostsProps) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.date}</p>
      <p>{post.excerpt}</p>
      <p>{post.slug}</p>
    </>
  );
};
