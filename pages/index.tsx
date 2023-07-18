import Header from "@/components/Header";
import builder, { BuilderComponent } from "@builder.io/react";
import { NextPage } from "next";
import Head from "next/head";

interface HomePageProps {
  links: INavlink[];
}

const HomePage: NextPage<HomePageProps> = ({ links }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page quantum" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-[#0d102d]">
        <Header links={links}></Header>
        <BuilderComponent model="page" />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await builder.getAll("nav-link");

  const links = data.map((item) => item?.data);

  return {
    props: {
      links: links || null,
    },
  };
};

export default HomePage;
