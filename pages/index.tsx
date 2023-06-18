import { BuilderComponent } from "@builder.io/react";
import { NextPage } from "next";

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <div>
      <h1>This is a Next.js page</h1>
      <BuilderComponent model="page" />
    </div>
  );
};

export default HomePage;
