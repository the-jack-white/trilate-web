"use client";

import Image from "next/image";
import { ThemeSwitch } from "..";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className="flex justify-between items-center">
      <Image
        src={`/images/logos/trilate_logo_name_${
          !isDark ? "black" : "white"
        }.svg`}
        alt="Trilate Header Logo"
        width={150}
        height={150}
      />

      <div className="flex gap-4 md:gap-8">
        <ThemeSwitch />
        <div className="hidden md:flex md:gap-8 uppercase dark:text-slate-200">
          <a>Services</a>
          <a>Pricing</a>
          <a>About</a>
          <a>Book a session</a>
        </div>
        <a className="bi bi-list text-slate-600 text-xl md:hidden dark:text-slate-200"></a>
      </div>
    </header>
  );
};

export default Header;
