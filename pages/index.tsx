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
  const generator = allPosts.generator._text;
  const managingEditor = allPosts.managingEditor._text;
  const title = allPosts.title._text;
  return (
    <Layout>
      <MainContent />
      {posts.length > 0 && (
        <MainPostsList
          posts={posts}
          generator={generator}
          managingEditor={managingEditor}
          title={title}
        />
      )}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  let allPosts: ChannelType[] = await setRSS();
  return {
    props: { allPosts },
    revalidate: 60 * 60 * 24,
  };
};
