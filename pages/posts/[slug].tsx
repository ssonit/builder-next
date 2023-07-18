import { GetServerSideProps, NextPage } from "next";

interface DetailPostProps {
  data: any;
}

const DetailPost: NextPage<DetailPostProps> = ({ data }) => {
  if (!data) return null;

  return <div className="">{data.body}</div>;
};

export const getServerSideProps: GetServerSideProps<DetailPostProps> = async ({
  params,
}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.slug}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default DetailPost;
