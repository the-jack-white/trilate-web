import type { Metadata } from "next";
import { Gugi } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "@/context/ThemeContext";

const gugi = Gugi({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Trilate",
  description: "Trilate | we try to never be late",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${gugi.className} bg-slate-600 dark:bg-slate-200`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
