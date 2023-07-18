import type {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { NextSeo } from "next-seo";

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ page: string[] }>) {
  const page =
    (await builder
      .get("page", {
        userAttributes: {
          urlPath: "/" + (params?.page?.join("/") || ""),
        },
      })
      .toPromise()) || null;

  return {
    props: {
      page,
    },
  };
}

// export async function getStaticProps({
//   params,
// }: GetStaticPropsContext<{ page: string[] }>) {
//   const page =
//     (await builder
//       .get("page", {
//         userAttributes: {
//           urlPath: "/" + (params?.page?.join("/") || ""),
//         },
//       })
//       .toPromise()) || null;

//   return {
//     props: {
//       page,
//     },
//     revalidate: 5,
//   };
// }

// export async function getStaticPaths() {
//   const pages = await builder.getAll("page", {
//     fields: "data.url",
//     options: { noTargeting: true },
//   });

//   const paths = pages
//     .map((page) => `${page.data?.url}`)
//     .filter((url) => url !== "/" && url !== "/about");

//   return {
//     paths,
//     fallback: "blocking",
//   };
// }

export default function Page({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const isPreviewingInBuilder = useIsPreviewing();
  const show404 = !page && !isPreviewingInBuilder;

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (show404) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  const { title, description, image } = page?.data! || {};

  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: "website",
          title,
          description,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }}
      />
      <BuilderComponent model="page" content={page} />
    </main>
  );
}
