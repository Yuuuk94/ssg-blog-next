import Layout from "../../components/common/layout";
import PostsList from "../../components/post/posts-list";
import { getAllPosts } from "../../lib/post-api";
import Post from "../../interfaces/post";
import type { NextPage } from "next";
import { getRSS } from "../../lib/tistory-api";

type Props = {
  allPosts: Post[];
};

const Posts = ({ allPosts }: Props) => {
  const posts = allPosts;
  return (
    <Layout>
      <PostsList posts={posts} />
    </Layout>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);
  return {
    props: { allPosts },
  };
};
