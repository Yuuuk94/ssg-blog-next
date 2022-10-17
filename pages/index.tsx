import type { NextPage } from "next";
import Layout from "../components/layout";
import PostList from "../components/postlist";
import Post from "../interfaces/post";
import getAllPosts from "../lib/postApi";

type Props = {
  allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
  const Post = allPosts[0];
  return (
    <Layout>
      {Post && <PostList slug={Post.slug} />}
      <PostList slug={"1"} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
