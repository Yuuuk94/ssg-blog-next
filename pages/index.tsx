import Layout from "../components/common/layout";
import MainPostsList from "../components/post/main-posts-list";
import MainContent from "../components/main";
import { setRSS } from "../lib/rss-api";
import { ChannelType } from "../interfaces/rss";

type Props = {
  allRSS: ChannelType[];
};

const Home = ({ allRSS }: Props) => {
  const allRSSPosts = allRSS;
  return (
    <Layout>
      <MainContent />
      {allRSSPosts.length > 0 && <MainPostsList posts={allRSSPosts} />}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  let allRSS: ChannelType | object | void = await setRSS();
  return {
    props: { allRSS },
  };
};
