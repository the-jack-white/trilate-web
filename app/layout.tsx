import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "@/context/ThemeContext";

const ubuntu_mono = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Trilate",
  description: "Trilate | Where we try to not be late",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={ubuntu_mono.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
