"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import CLink from "./CLink";
import { http } from "@/lib/http";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const links = [
    { href: "/dashboard", content: "Home" },
    { href: "/dashboard/profile", content: "Profile" },
  ];
  return (
    <>
      {links.map((link) => {
        if (pathname === link.href) {
          return (
            <CLink href={link.href} key={link.href}>
              {link.content}
            </CLink>
          );
        }
        return (
          <Link href={link.href} key={link.href}>
            {link.content}
          </Link>
        );
      })}
      <Button
        onClick={async () => {
          await http.post("/auth/logout");
          router.refresh();
          router.push("/");
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default NavBar;
