import Layout from "../components/common/layout";
import MainPostsList from "../components/post/main-posts-list";
import MainContent from "../components/main";
import { setRSS } from "../lib/rss-api";

type Props = {
  allPosts: any;
};

const Home = ({ allPosts }: Props) => {
  const Posts = allPosts;
  console.log(Posts);
  return (
    <Layout>
      <MainContent />
      {Posts.length > 0 && <MainPostsList posts={Posts} />}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  let allPosts: object | void = await setRSS();
  return {
    props: { allPosts },
  };
};
