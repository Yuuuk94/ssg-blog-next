import Link from "next/link";
import Post from "../../interfaces/post";

type WorksListProps = {
  works: Post[];
};

const WorksList = ({ works }: WorksListProps) => {
  const worksList = works;
  return (
    <>
      {worksList.length > 0 &&
        worksList.map((work, key) => <Work key={key} work={work} />)}
    </>
  );
};

export default WorksList;

type WorkProps = {
  work: Post;
};

const Work = ({ work }: WorkProps) => {
  return (
    <Link as={`/works/${work.slug}`} href="/works/[slug]">
      <p>{work.title}</p>
    </Link>
  );
};
