import Layout from "../../components/common/layout";
import WorksList from "../../components/works/works-list";
import { getAllWorks } from "../../lib/work-api";
import Post from "../../interfaces/post";
import WorkType from "../../interfaces/work";
import { Neotitle } from "../../components/common/styled-component";

type Props = {
  allWorks: WorkType[];
};
const Works = ({ allWorks }: Props) => {
  const works = allWorks;
  return (
    <Layout>
      <Neotitle>PERSONAL PROJECTS</Neotitle>
      <WorksList works={works} />
    </Layout>
  );
};

export default Works;

export const getStaticProps = async () => {
  const allWorks = getAllWorks([
    "title",
    "date",
    "project",
    "slug",
    "coverImage",
    "URL",
    "excerpt",
  ]);

  return {
    props: { allWorks },
  };
};
