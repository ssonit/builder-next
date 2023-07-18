import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NextLinkProps {
  href: string;
  children: ReactNode;
}

const NextLink: NextPage<NextLinkProps> = ({ href, children }) => {
  const router = useRouter();
  return (
    <Link href={href} onClick={() => router.push(href)}>
      {children}
    </Link>
  );
};

export default NextLink;
