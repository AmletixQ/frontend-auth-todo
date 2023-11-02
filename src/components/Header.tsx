"use client";
import Link from "next/link";
import LogoutButton from "./Logout";
import { usePathname } from "next/navigation";

interface ILink {
  href: string;
  name: string;
}

const links: ILink[] = [
  { href: "/", name: "Home"},
  { href: "/todos", name: "Todos" },
  { href: "/settings", name: "Settings" },
];

const Header = () => {
  const path = usePathname();

  return (
    <div className="flex justify-evenly mb-4 py-4 border-b border-slate-700">
      {links.map(({ href, name }) => (
        <Link
          className={
            "border border-slate-500 px-2 py-1 rounded-md" +
            (path === href ? " border-yellow-500" : "")
          }
          href={href}
          key={href + name}
        >
          {name}
        </Link>
      ))}
      <LogoutButton />
    </div>
  );
};

export default Header;
