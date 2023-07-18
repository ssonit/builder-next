import Header from "@/components/Header";
import builder, { BuilderComponent } from "@builder.io/react";
import { NextPage } from "next";
import Head from "next/head";

interface AboutProps {
  links: INavlink[];
}

const About: NextPage<AboutProps> = ({ links }) => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About page quantum" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-[#0d102d]">
        <Header links={links}></Header>
        <BuilderComponent model="page" />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await builder.getAll("nav-link");

  const links = data.map((item) => item?.data);

  return {
    props: {
      links: links || null,
    },
    revalidate: 5,
  };
};

export default About;
