import Link from "next/link";
import Post from "../../interfaces/post";
import { NeoWorkContent } from "../common/styled-component";

type WorksListProps = {
  works: Post[];
};

const WorksList = ({ works }: WorksListProps) => {
  const worksList = works;
  return (
    <div className="flex flex-wrap justify-between">
      {worksList.length > 0 &&
        worksList.map((work, key) => <Work key={key} work={work} />)}
    </div>
  );
};

export default WorksList;

type WorkProps = {
  work: Post;
};

const Work = ({ work }: WorkProps) => {
  return (
    <NeoWorkContent>
      <Link as={`/works/${work.slug}`} href="/works/[slug]">
        <p>{work.title}</p>
      </Link>
    </NeoWorkContent>
  );
};
