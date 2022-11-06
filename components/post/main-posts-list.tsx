import { NeoContent } from "../common/styled-component";
import DateFormatter from "../common/date-formatter";
import Link from "next/link";
import { RSSItemType } from "../../interfaces/rss";

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
  console.log(post);
  return (
    <Link as={`/posts/${24}`} href="/posts/[slug]">
      <article className="cursor-pointer hover:content-underline">
        <h3 className="text-lg font-semibold leading-snug text-textMain">
          {post.title._text}
        </h3>
        <DateFormatter dateString={post.pubDate._text} />
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
  category: Array<{ _text: string }> | { _text: string } | any;
};

const ItemCategory = ({ category }: ItemCategoryProps) => {
  let categories: Array<{ _text: string }> = [];
  if (Array.isArray(category) === false) {
    categories.push(category);
  } else {
    categories = category;
  }

  return (
    <div>
      {categories?.map((item, key) => (
        <span
          key={item._text}
          className="mt-2 mr-2 text-md leading-snug text-textSub"
        >
          {`${item._text}${key === category.length - 1 ? "" : ","}`}
        </span>
      ))}
    </div>
  );
};
