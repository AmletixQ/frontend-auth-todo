import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth ToDo | NextJS + TypeScript + TailwindCSS",
  description: "For personal work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(montserrat.className, "w-screen h-screen px-40 pt-3")}>
        {children}
      </body>
    </html>
  );
}
