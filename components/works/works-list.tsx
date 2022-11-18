import Link from "next/link";
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
        <div className="w-full hover:content-underline">
          <h3 className="mb-2 text-xl font-semibold text-textMain">
            {work.title}
          </h3>
          <div className="mb-4">
            <p className="text-sm leading-thin text-textMain">{work.project}</p>
            <p className="text-sm leading-thin text-textMain">{work.date}</p>
            <p
              className="mb-2 text-sm leading-thin text-textMain"
              dangerouslySetInnerHTML={{ __html: work.languge }}
            ></p>
            <p className="text-sm leading-thin text-textMain">{work.excerpt}</p>
          </div>
          <Image
            src={work.Image.cover}
            alt={work.slug}
            width={700}
            height={400}
          />
        </div>
      </Link>
    </NeoWorkContent>
  );
};
