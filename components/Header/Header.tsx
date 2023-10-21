"use client";

import Image from "next/image";
import { ThemeSwitch } from "..";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className="flex justify-between items-center">
      <Link href="/">
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
        <ThemeSwitch />
        <div className="hidden md:flex md:gap-8 uppercase dark:text-slate-200">
          <Link href="/services">Services</Link>
          <Link href="pricing">Pricing</Link>
          <Link href="#">About</Link>
          <Link href="#">Book a session</Link>
        </div>
        <a className="bi bi-list text-slate-600 text-xl md:hidden dark:text-slate-200"></a>
      </div>
    </header>
  );
};

export default Header;
