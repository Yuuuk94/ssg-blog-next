import type { NextPage } from "next";
import Layout from "../components/layout";
import PostList from "../components/postlist";

const Home: NextPage = () => {
  return (
    <Layout>
      <PostList />
    </Layout>
  );
};

export default Home;
