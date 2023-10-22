"use client";

import Image from "next/image";
import { ThemeSwitch } from "..";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

type HeaderType = {
  menuToggle: boolean;
  menuToggleHandler: (arg0: boolean) => void;
};

const Header = ({ menuToggle, menuToggleHandler }: HeaderType) => {
  const { isDark } = useTheme();

  return (
    <header className="flex justify-between items-center">
      <Link href="/" className="z-50">
        <Image
          src={`/images/logos/trilate_logo_name_${
            !isDark ? "black" : "white"
          }.svg`}
          alt="Trilate Header Logo"
          width={150}
          height={150}
        />
      </Link>

      <div className="flex gap-4 md:gap-8">
        {/* <ThemeSwitch /> */}
        <div className="hidden md:flex md:gap-8 uppercase dark:text-slate-200">
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="#">Book a session</Link>
        </div>
        <a
          className={`bi ${
            !menuToggle ? "bi-list" : "bi-list-nested"
          }  z-10 px-2 text-slate-600 text-xl md:hidden dark:text-slate-200`}
          onClick={() => menuToggleHandler(!menuToggle)}
        ></a>
      </div>
    </header>
  );
};

export default Header;
