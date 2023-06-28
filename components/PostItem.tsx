import { NextPage } from "next";

interface PostItemProps {
  title: string;
  body: string;
}

const PostItem: NextPage<PostItemProps> = ({ title, body }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p className="bg-blue-500">{body}</p>
    </div>
  );
};

export default PostItem;
