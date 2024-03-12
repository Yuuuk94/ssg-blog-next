import work from "../../interfaces/work";
import { NeoContent } from "../common/styled-component";
import WorkType from "../../interfaces/work";
import Image from "next/image";

type Props = {
  work: WorkType;
};

const WorkDetail = ({ work }: Props) => {
  return (
    <>
      <NeoContent>
        <h2 className="mb-4 text-xl font-bold  text-textMain">{work.title}</h2>
        <p className="text-sm text-textMain">{work.project}</p>
        <p className="text-sm text-textMain">{work.date}</p>
        <p
          className="mb-2 text-sm text-textMain"
          dangerouslySetInnerHTML={{ __html: work.languge }}
        ></p>
        <a
          href={work.URL.demo}
          className="text-sm text-textMain hover:content-underline"
        >
          데모보기 : {work.URL.demo}
        </a>
        {work.URL.git && (
          <a
            href={work.URL.git}
            className="block text-sm text-textMain hover:content-underline"
          >
            깃허브 보기 : {work.URL.git}
          </a>
        )}
      </NeoContent>
      <NeoContent>
        <h2 className="mb-4 text-lg font-bold  text-textSub">View Page</h2>
        <Image
          src={work.Image.cover}
          alt="cover"
          width="1200"
          height="800"
          priority
        />
      </NeoContent>
      <NeoContent>
        <div
          className="work-content"
          dangerouslySetInnerHTML={{ __html: work.content }}
        ></div>
        {work.Image.url && (
          <Image
            src={work.Image.url}
            alt=""
            width="400"
            height="280"
            className="mx-auto"
          />
        )}
      </NeoContent>
    </>
  );
};

export default WorkDetail;
