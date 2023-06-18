import builder, { BuilderComponent } from "@builder.io/react";
import { GetServerSidePropsContext, NextPage } from "next";
import "@builder.io/widgets";

interface TestPageProps {
  data: any;
  hero: any;
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ page: string[] }>) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const urlPath = "/" + (params?.page?.join("/") || "");

  const hero = await builder
    .get("hero", {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  return {
    props: {
      data,
      hero,
    },
  };
}

const TestPage: NextPage<TestPageProps> = ({ data, hero }) => {
  return (
    <div>
      {data?.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <BuilderComponent model="homepage"></BuilderComponent>
      <div className="text-center">Sections model</div>
      <BuilderComponent model="hero" content={hero} />
    </div>
  );
};

export default TestPage;
