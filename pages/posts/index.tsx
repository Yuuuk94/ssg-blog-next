import Layout from "../../components/common/layout";
import PostsList from "../../components/post/posts-list";
import { getAllPosts } from "../../lib/post-api";
import Post from "../../interfaces/post";
import type { NextPage } from "next";
import { setRSS } from "../../lib/rss-api";
import { ChannelType } from "../../interfaces/rss";

type Props = {
  allPosts: ChannelType;
};

const Posts = ({ allPosts }: Props) => {
  const posts = allPosts.item;
  return (
    <Layout>
      <PostsList posts={posts} />
    </Layout>
  );
};

export default Posts;

export const getStaticProps = async () => {
  let allPosts: ChannelType = await setRSS();
  return {
    props: { allPosts },
  };
};
