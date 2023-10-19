"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";

const ThemeSwitch = () => {
  const { isDark, setIsDark } = useTheme();

  const themeSwitchHandler = (checked: boolean) => {
    const isDarkChecked = checked;

    if (
      isDarkChecked ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      localStorage.setItem("theme", "light");
    } else {
      themeSwitchHandler(currentTheme === "light");
    }
  }, []);

  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          checked={isDark}
          className="sr-only peer"
          onChange={(e) => themeSwitchHandler(e.target.checked)}
        />
        <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-200 after:peer-checked:bg-slate-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-200"></div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
