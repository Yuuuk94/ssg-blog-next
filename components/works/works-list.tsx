import Link from "next/link";
import Post from "../../interfaces/post";
import WorkType from "../../interfaces/work";
import { NeoWorkContent } from "../common/styled-component";
import Image from "next/image";

type WorksListProps = {
  works: WorkType[];
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
  work: WorkType;
};

const Work = ({ work }: WorkProps) => {
  return (
    <NeoWorkContent>
      <Link as={`/works/${work.slug}`} href="/works/[slug]">
        <div>
          <h3 className="text-xl font-semibold leading-snug text-textMain">
            {work.title}
          </h3>
          <p className="mt-2 text-md leading-snug text-textMain">
            {work.project}
          </p>
          <p className="mt-2 text-md leading-snug text-textMain">{work.date}</p>
          <p className="mt-2 text-md leading-snug text-textMain">
            {work.excerpt}
          </p>
          <Image src={work.coverImage} alt="" width={500} height={300} />
        </div>
      </Link>
    </NeoWorkContent>
  );
};
