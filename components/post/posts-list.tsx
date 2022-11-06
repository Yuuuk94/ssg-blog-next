import Link from "next/link";
import DateFormatter from "../common/date-formatter";
import { NeoContent, NeoBtn } from "../common/styled-component";
import { useState } from "react";
import { RSSItemType } from "../../interfaces/rss";
import { ItemCategory } from "../common/ItemCategory";

type PostsListProps = {
  posts: RSSItemType[];
};

const PostsList = ({ posts }: PostsListProps) => {
  const allPosts = posts;

  const [showNm, setShowNm] = useState<number>(6);
  const [showBtn, setShowBtn] = useState<boolean>(true);

  const sumNm = () => {
    function sum(a: number, b: number): number {
      return a + b;
    }
    let num = sum(showNm, 6);
    if (showNm < allPosts.length - 6) {
      setShowNm(num);
    } else {
      setShowNm(num);
      setShowBtn(false);
    }
  };

  return (
    <>
      {allPosts.length > 0 &&
        allPosts.map((post, key) => {
          if (key < showNm) {
            return <Post key={key} post={post} />;
          }
        })}
      {showBtn && <ShowMoreBtn more={sumNm} />}
    </>
  );
};

export default PostsList;

type PostProps = {
  post: RSSItemType;
};

export const Post = ({ post }: PostProps) => {
  return (
    <NeoContent>
      <a href={post.link._text} target="_blick">
        <div className="cursor-pointer hover:underline decoration-2 decoration-textSub">
          <h3 className="text-xl font-semibold leading-snug text-textMain">
            {post.title._text}
          </h3>
          <span className="mt-2 mr-2 text-md leading-snug text-textSub">
            {post.author._text}
          </span>
          <DateFormatter dateString={post.pubDate._text} />
          <p className="mt-2 text-xl leading-snug text-textSub">{}</p>
          <p className="mt-2 text-lg leading-snug text-textSub">read more...</p>
          <ItemCategory category={post.category} />
        </div>
      </a>
    </NeoContent>
  );
};

type ShowMoreBtnProps = {
  more: () => void;
};
export const ShowMoreBtn = ({ more }: ShowMoreBtnProps) => {
  return (
    <NeoBtn>
      <p
        className="text-center text-md font-semibold text-textSub hover:text-textMain"
        onClick={more}
      >
        Show More
      </p>
    </NeoBtn>
  );
};
