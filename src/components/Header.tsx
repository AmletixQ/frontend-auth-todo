"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ILink {
  href: string;
  name: string;
}

const links: ILink[] = [
  { href: "/dashboard", name: "Home" },
  { href: "/settings", name: "Settings" },
  { href: "/todos", name: "Todos" },
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
    </div>
  );
};

export default Header;