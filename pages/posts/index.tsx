import Layout from "../../components/layout";
import PostList from "../../components/postlist";

const Posts = () => {
  return (
    <Layout>
      <PostList slug="1" />
      <PostList slug="2" />
      <PostList slug="3" />
      <PostList slug="4" />
      <PostList slug="5" />
      <PostList slug="6" />
    </Layout>
  );
};

export default Posts;
