import Header from "@/components/Header";
import { BuilderComponent } from "@builder.io/react";
import { NextPage } from "next";
import Head from "next/head";

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <div className="min-h-screen bg-[#0d102d]">
      <Header></Header>
      <BuilderComponent model="page" />
    </div>
  );
};

export default HomePage;
