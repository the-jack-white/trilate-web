"use client";

import Image from "next/image";
import { ThemeSwitch } from "..";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { isDark } = useTheme();

  console.log("isDark from Header: ", isDark);

  return (
    <header className="flex justify-between items-center">
      <Image
        src={`/images/trilate_logo_name_${!isDark ? "black" : "white"}.svg`}
        alt="Trilate Header Logo"
        width={150}
        height={150}
      />
      <div className="flex gap-8 uppercase dark:text-white">
        <ThemeSwitch />
        <a>Services</a>
        <a>Pricing</a>
        <a>About</a>
        <a>Book a session</a>
      </div>
    </header>
  );
};

export default Header;
