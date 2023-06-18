import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { builderConfig } from "@/configs/builder";

builder.init(builderConfig.PUBLIC_API_KEY);

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
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
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const pages = await builder.getAll("page", {
    options: { noTargeting: true },
    omit: "data.blocks",
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const isPreviewingInBuilder = useIsPreviewing();
  const show404 = !page && !isPreviewingInBuilder;

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  console.log(page, "page");
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <BuilderComponent model="page" content={page} />
      )}
    </main>
  );
}
