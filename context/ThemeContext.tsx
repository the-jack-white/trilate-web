"use client";

import { createContext, useContext, ReactNode, useState } from "react";

type ThemeContextType = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const themeContextDefaultValues: ThemeContextType = {
  isDark: false,
  setIsDark: () => {},
};

const ThemeContext = createContext<ThemeContextType>(themeContextDefaultValues);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const value = {
    isDark,
    setIsDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
