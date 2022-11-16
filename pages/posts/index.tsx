import Layout from "../../components/common/layout";
import PostsList from "../../components/post/posts-list";
import type { NextPage } from "next";
import { setRSS } from "../../lib/rss-api";
import { ChannelType } from "../../interfaces/rss";
import { Neotitle } from "../../components/common/styled-component";

type Props = {
  allPosts: ChannelType;
};

const Posts = ({ allPosts }: Props) => {
  const posts = allPosts.item;
  return (
    <Layout>
      <Neotitle>BLOG POSTS</Neotitle>
      <PostsList posts={posts} />
    </Layout>
  );
};

export default Posts;

export const getStaticProps = async () => {
  let allPosts: ChannelType[] = await setRSS();
  return {
    props: { allPosts },
    revalidate: 60 * 60 * 24,
  };
};
