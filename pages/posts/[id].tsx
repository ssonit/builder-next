import { NextPage } from "next";
import { useRouter } from "next/router";

interface DetailPostProps {}

const DetailPost: NextPage<DetailPostProps> = ({}) => {
  const router = useRouter();
  const id = router.query.id;

  return <div>DetailPost {id}</div>;
};

export default DetailPost;
