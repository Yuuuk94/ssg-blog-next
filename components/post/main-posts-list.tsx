import { NeoContent } from "../common/styled-component";
import DateFormatter from "../common/date-formatter";
import Link from "next/link";
import { ChannelType, RSSItemType } from "../../interfaces/rss";

type MainPostsListProps = {
  posts: ChannelType[];
};

const MainPostsList = ({ posts }: MainPostsListProps) => {
  const postsItem = posts[0].item;
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
  return (
    <Link as={`/posts/${24}`} href="/posts/[slug]">
      <article className="cursor-pointer hover:content-underline">
        <h3 className="text-lg font-semibold leading-snug text-textMain">
          {post.title[0]}
        </h3>
        <DateFormatter dateString={post.pubDate[0]} />
        {/* <p
          className="mt-2 text-md leading-snug text-textSub"
          dangerouslySetInnerHTML={{ __html: post.description[0] }}
        /> */}
        <ItemCategory category={post.category} />
        <p className="border-b border-textSub mt-4 mb-6" />
      </article>
    </Link>
  );
};

type ItemCategoryProps = {
  category: string[];
};
const ItemCategory = ({ category }: ItemCategoryProps) => {
  return (
    <div>
      {category?.map((item, key) => (
        <span
          key={item}
          className="mt-2 mr-2 text-md leading-snug text-textSub"
        >
          {`${item}${key === category.length - 1 ? "" : ","}`}
        </span>
      ))}
    </div>
  );
};
