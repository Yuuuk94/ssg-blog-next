import Post from "../../interfaces/post";
import { NeoContent } from "../common/styled-component";

type MainPostsListProps = {
  posts: Post[];
};

const MainPostsList = ({ posts }: MainPostsListProps) => {
  return (
    <NeoContent>
      <p className="pb-8">New Posts</p>
      {posts.length > 0 &&
        posts.map((post, key) => <MainPost key={key} post={post} />)}
    </NeoContent>
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
      <p className="border-b border-gray my-8"></p>
    </>
  );
};
