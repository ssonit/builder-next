import Header from "@/components/Header";
import { BuilderComponent } from "@builder.io/react";
import { NextPage } from "next";
import Head from "next/head";

interface AboutProps {}

const About: NextPage<AboutProps> = ({}) => {
  return (
    <div className="min-h-screen bg-[#0d102d]">
      <Head>
        <title>About</title>
        <meta name="description" content="about page quantum" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header></Header>
      <BuilderComponent model="page" />
    </div>
  );
};

export default About;
