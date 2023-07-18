import builder, { BuilderComponent } from "@builder.io/react";
import { GetServerSideProps, NextPage } from "next";

interface PostsProps {
  content: any;
}

const Posts: NextPage<PostsProps> = ({ content }) => {
  return <BuilderComponent model="page" content={content}></BuilderComponent>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/posts",
      },
    })
    .toPromise();

  return {
    props: {
      content: content || null,
    },
  };
};

export default Posts;
