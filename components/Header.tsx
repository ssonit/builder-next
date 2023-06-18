import { NextPage } from "next";

interface HeaderProps {}

const Header: NextPage<HeaderProps> = ({}) => {
  return <div className="p-5 text-center">Header</div>;
};

export default Header;
