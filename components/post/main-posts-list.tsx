import { NeoContent } from "../common/styled-component";
import DateFormatter from "../common/date-formatter";
import Link from "next/link";
import { RSSItemType } from "../../interfaces/rss";
import { ItemCategory } from "../common/ItemCategory";

type MainPostsListProps = {
  posts: RSSItemType[];
};

const MainPostsList = ({ posts }: MainPostsListProps) => {
  const postsItem = posts;
  return (
    <NeoContent>
      <p className="pb-6 text-lg font-semibold leading-snug text-textSub">
        New Posts
      </p>
      {postsItem.length > 0 &&
        postsItem.map((post, key) => {
          if (key < 5) return <MainPost key={key} post={post} />;
        })}
    </NeoContent>
  );
};

export default MainPostsList;

type MainPostsProps = {
  post: RSSItemType;
};
export const MainPost = ({ post }: MainPostsProps) => {
  // const description = parse(post.description._text);
  // description.childNodes.map((tion) => {});
  // console.log(post);

  return (
    <a href={post.link._text} target="_blick">
      <article className="cursor-pointer hover:content-underline">
        <h3 className="text-lg font-semibold leading-snug text-textMain">
          {post.title._text}
        </h3>
        <span className="mt-2 mr-2 text-md leading-snug text-textSub">
          {post.author._text}
        </span>
        <DateFormatter dateString={post.pubDate._text} />
        <p
          className="mt-2 text-md leading-snug text-textSub"
          // dangerouslySetInnerHTML={{ __html: }}
        >
          ananas tistory에서 내용 확인하러 가기
        </p>
        <ItemCategory category={post.category} />
        <p className="border-b border-textSub mt-4 mb-6" />
      </article>
    </a>
  );
};
