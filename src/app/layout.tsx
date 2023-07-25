import "./globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export const metadata: Metadata = {
  title: "Auth Todo | Next + TS + SC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
