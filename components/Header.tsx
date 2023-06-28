import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface HeaderProps {}

const Header: NextPage<HeaderProps> = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const { height } = headerRef.current.getBoundingClientRect();
        if (window.scrollY >= height) {
          headerRef.current.classList.add("bg-white", "bg-opacity-10");
        } else headerRef.current.classList.remove("bg-white", "bg-opacity-10");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full py-4 z-[100]" ref={headerRef}>
      <div className="flex items-center justify-between px-24">
        <Link href={"/"}>
          <Image
            width={150}
            height={56}
            src={"/images/logo_quantum.png"}
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-10 mr-8 text-white">
          <Link className="font-bold" href={"/about"}>
            About
          </Link>
          <Link className="font-bold" href={"/learn"}>
            Learn
          </Link>
          <Link className="font-bold" href={"/build"}>
            Build
          </Link>
          <Link className="font-bold" href={"/token"}>
            Token
          </Link>
          <Link className="font-bold" href={"/community"}>
            Community
          </Link>
        </div>
        <button className="rounded-full px-8 py-3 bg-white text-[#8257fe] font-bold">
          Whitepaper
        </button>
      </div>
    </div>
  );
};

export default Header;
