import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/common/layout";
import { getWorkBySlug, getAllWorks } from "../../lib/work-api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import Image from "next/image";
import WorkType from "../../interfaces/work";

type Props = {
  post: WorkType;
  morePosts: WorkType[];
  preview?: boolean;
};

export default function Work({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <p>{post.title}</p>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <Image src={post.coverImage} alt="" width="300" height="300" />
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getWorkBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "project",
    "coverImage",
    "URL",
    "Image",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllWorks(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
