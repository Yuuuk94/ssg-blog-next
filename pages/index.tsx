import Layout from "../components/common/layout";
import MainPostsList from "../components/post/main-posts-list";
import MainContent from "../components/main";
import { setRSS } from "../lib/rss-api";
import { ChannelType } from "../interfaces/rss";

type Props = {
  allPosts: ChannelType;
};

const Home = ({ allPosts }: Props) => {
  const posts = allPosts.item;
  return (
    <Layout>
      <MainContent />
      {posts.length > 0 && <MainPostsList posts={posts} />}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  let allPosts: ChannelType = await setRSS();
  return {
    props: { allPosts },
  };
};
