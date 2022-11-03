type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;

export type TistoryItemType = {
  title: string;
  link: string;
  description: string;
  category: string;
  guid: string;
  comments: string;
  pubDate: string;
};
