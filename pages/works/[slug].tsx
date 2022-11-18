import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/common/layout";
import { getWorkBySlug, getAllWorks } from "../../lib/work-api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import WorkType from "../../interfaces/work";
import WorkDetail from "../../components/works/work-detail";

type Props = {
  work: WorkType;
  morePosts: WorkType[];
  preview?: boolean;
};

export default function Work({ work, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !work?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Head>
        <meta property="og:image" content={work.Image.cover} />
      </Head>
      <WorkDetail work={work} />
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const work = getWorkBySlug(params.slug, [
    "slug",
    "title",
    "project",
    "date",
    "languge",
    "URL",
    "Image",
    "content",
  ]);
  const content = await markdownToHtml(work.content || "");

  return {
    props: {
      work: {
        ...work,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const works = getAllWorks(["slug"]);

  return {
    paths: works.map((work) => {
      return {
        params: {
          slug: work.slug,
        },
      };
    }),
    fallback: false,
  };
}
