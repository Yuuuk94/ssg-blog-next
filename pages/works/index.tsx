import Layout from "../../components/common/layout";
import WorksList from "../../components/works/works-list";
import { getAllPosts } from "../../lib/work-api";
import Post from "../../interfaces/post";

type Props = {
  allWorks: Post[];
};
const Works = ({ allWorks }: Props) => {
  const works = allWorks;
  return (
    <Layout>
      <WorksList works={works} />
    </Layout>
  );
};

export default Works;

export const getStaticProps = async () => {
  const allWorks = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allWorks },
  };
};
